// import env from '@/env';
import { LoadingOutlined, PlusOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { message, Upload, Button, Space } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useCallback, useEffect, useState } from 'react';
import './style.scss';
import { getDimensions } from '@helpers/getDimensions';
import firebase from '@modules/firebaseConnect/firebaseConnect';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

interface IProps {
  value?: any;
  onChange?(url: string | undefined): void;
  width?: number;
  height?: number;
  mustBeSquare?: boolean;
  name: string;
  urlAvater?: string;
}

export default function UploadDragger(props: IProps) {
  console.log('ad', props.value);
  const beforeUpload = useCallback(
    async (file: any) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('Bạn chỉ có thể tải lên tệp JPG / PNG!');
        throw new Error('Bạn chỉ có thể tải lên tệp JPG / PNG! ');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Hình ảnh phải có kích thước nhỏ hơn 2MB!');
        throw new Error('Hình ảnh phải có kích thước nhỏ hơn 2MB! ');
      }
      const dimensions = await getDimensions(file);

      if (props.mustBeSquare === true && dimensions.width !== dimensions.height) {
        message.error('Ảnh phải là hình vuông');
        throw new Error('Ảnh phải là hình vuông');
      }

      if (props.height !== undefined && props.width !== undefined) {
        if (dimensions.width !== props.width || dimensions.height !== props.height) {
          message.error('Ảnh phải có kích thước: ' + props.width + 'x' + props.height);
          throw new Error('Ảnh phải có kích thước: ' + props.width + 'x' + props.height);
        }
      }
      if (props.height !== undefined && props.width === undefined) {
        if (dimensions.height !== props.height) {
          message.error('Kích thước sai, phải là: ... X ' + props.height);
          throw new Error('Kích thước sai, phải là: ... X ' + props.height);
        }
      }
      if (props.width !== undefined && props.height === undefined) {
        if (dimensions.width !== props.width) {
          message.error('Kích thước sai, phải là: ' + props.width + 'x ...');
          throw new Error('Kích thước sai, phải là: ' + props.width + 'x ...');
        }
      }
    },
    [props.width, props.height, props.mustBeSquare],
  );

  useEffect(() => {
    if (props.urlAvater) {
      setState({ ...state, url: `${props.urlAvater}` });
    } else {
      setState({ ...state, url: '', value: '' });
    }
    // eslint-disable-next-line
  }, [props]);

  const [state, setState] = useState({
    loading: false,
    value: props.value,
    url: '',
  });

  const [stateIMG, setStateIMG] = useState({
    previewVisible: false,
  });

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      props.onChange && props.onChange(undefined);
      setState({
        ...state,
        loading: true,
        value: undefined,
      });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) =>
        setState({
          ...state,
          loading: false,
          url: imageUrl,
        }),
      );
    }
  };

  const customRequest = ({ onSuccess, onError, file }: any) => {
    const uploadTask = firebase.storage().ref(`images/${props.name}`).put(file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log('snapshot');
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref('images')
          .child(props.name)
          .getDownloadURL()
          .then((url) => {
            setState({ ...state, url: url });
            props.onChange && props.onChange(url);
            onSuccess();
          })
          .catch((error) => {
            props.onChange && props.onChange(undefined);
            onError(error);
          });
      },
    );
  };

  return (
    <>
      {state.url ? (
        <div className="container">
          <Modal
            visible={stateIMG.previewVisible}
            onCancel={() => {
              setStateIMG({ previewVisible: false });
            }}
            footer={null}
          >
            <img alt="ImgProduct" src={state.url} style={{ width: '100%' }} />
          </Modal>
          <input
            type="image"
            src={state.url}
            value={props.value?.id}
            className="image"
            alt="avatar"
            style={{ width: '100%' }}
          />
          <div className="middle">
            <Space>
              <Button
                type="ghost"
                shape="circle"
                icon={<DeleteOutlined style={{ color: '#ffffff' }} />}
                size="middle"
                title="Xóa"
                onClick={() => {
                  props.onChange && props.onChange(undefined);
                  setState({
                    loading: false,
                    value: { id: '', createdBy: '', fileName: '', fileType: '', size: 0, uri: '' },
                    url: '',
                  });
                }}
              />
              <Button
                type="ghost"
                shape="circle"
                icon={<EyeOutlined style={{ color: '#ffffff' }} />}
                size="middle"
                title="Xem"
                onClick={() => {
                  setStateIMG({ previewVisible: true });
                }}
              />
            </Space>
          </div>
        </div>
      ) : (
        <Upload.Dragger
          name="files"
          className="upload"
          customRequest={customRequest}
          multiple={false}
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <div>
            {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload.Dragger>
      )}
    </>
  );
}
