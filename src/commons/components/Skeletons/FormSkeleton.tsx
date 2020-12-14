import React from 'react';
import { Skeleton } from 'antd';
import { SkeletonProps } from 'antd/lib/skeleton';

export default React.memo(function FormSkeleton(props: SkeletonProps) {
  return <Skeleton {...props}>{props.children}</Skeleton>;
});
