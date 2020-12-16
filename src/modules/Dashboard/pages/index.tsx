import a1 from '@assets/images/barber/1.jpg';
import a2 from '@assets/images/barber/2.jpg';
import a3 from '@assets/images/barber/3.jpg';
import a5 from '@assets/images/barber/5.jpg';
import a6 from '@assets/images/barber/6.jpg';
import PageHeader from '@commons/components/PageHeader';
import { Form, Image, Row } from 'antd';
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
      <Swiper
        style={{ width: 1000, height: 600, justifyItems: 'center', marginTop: 30 }}
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
      <Form>
        <Row style={{ backgroundColor: '#2E2E2E', textAlign: 'center' }}>
          <h2 style={{ alignItems: 'center', justifyContent: 'center' }}> DVC Barber </h2>
        </Row>
      </Form>
    </>
  );
}
