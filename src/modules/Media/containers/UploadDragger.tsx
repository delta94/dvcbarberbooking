// import env from '@/env';
import { LoadingOutlined, PlusOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { message, Upload, Button, Space } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useCallback, useState } from 'react';
import { singleUploadApi } from '../services/apis';
import './style.scss';
import { getDimensions } from '@helpers/getDimensions';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

interface IProps {
  value?: any;
  onChange?(media: any | undefined): void;
  width?: number;
  height?: number;
  mustBeSquare?: boolean;
}

export default function UploadDragger(props: IProps) {
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

  const [state, setState] = useState({
    imageUrl: '',
    loading: false,
    value: props.value,
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
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  const customRequest = ({ onSuccess, onError, file }: any) => {
    singleUploadApi(file)
      .then((r) => {
        props.onChange && props.onChange(r.singleUpload || undefined);
        setState({
          ...state,
          value: r.singleUpload || undefined,
        });

        onSuccess();
      })
      .catch((error) => {
        props.onChange && props.onChange(undefined);
        onError(error);
      });
  };

  return (
    <>
      {state.imageUrl ? (
        <div className="container">
          <Modal
            visible={stateIMG.previewVisible}
            onCancel={() => {
              setStateIMG({ previewVisible: false });
            }}
            footer={null}
          >
            <img alt="ImgProduct" src={state.imageUrl} style={{ width: '100%' }} />
          </Modal>
          <input
            type="image"
            src={state.imageUrl}
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
                    imageUrl: '',
                    loading: false,
                    value: { id: '', createdBy: '', fileName: '', fileType: '', size: 0, uri: '' },
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
