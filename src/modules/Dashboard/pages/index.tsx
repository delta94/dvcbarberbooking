import a1 from '@assets/images/barber/1.jpg';
import a2 from '@assets/images/barber/2.jpg';
import a3 from '@assets/images/barber/3.jpg';
import a5 from '@assets/images/barber/5.jpg';
import a6 from '@assets/images/barber/6.jpg';
import PageHeader from '@commons/components/PageHeader';
import { Col, Form, Image, Row } from 'antd';
import React from 'react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export default function DashboardPage() {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
  ];
  return (
    <>
      <PageHeader title="Tổng quan" breadcrumb={{ routes }} />

      <Form style={{ backgroundColor: 'white', margin: 30, padding: 15 }}>
        <Swiper
          style={{ width: 800, height: 350, marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Image style={{ resize: 'revert' }} src={a1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={a2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={a3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={a5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={a6} />
          </SwiperSlide>
          ...
        </Swiper>
        <Row>
          <Col style={{ textAlign: 'center', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ marginTop: 30 }}> DVC Barber </h2>

            <div style={{ marginLeft: 15, marginTop: 30 }}>
              <p>+ Website dùng để quản lí lịch đặt của khách </p>
              <p>+ Website dùng để quản lí nhân viên </p>
              <p>+ Website dùng để quản thời gian </p>
              <p>+ Website dùng để quản lí dịch vụ và sản phảm </p>
              <p>+ Website dùng để quản lí chi nhánh</p>
              <p>+ Website dùng để thống kê </p>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
