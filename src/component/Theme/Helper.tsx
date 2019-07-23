import React from 'react';
import { ReactNodeType } from '../types';

export const renderNode = (
  Component: typeof React.Component, 
  content?: ReactNodeType,
  defaultProps?: any,
): React.ReactNode => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    return <Component {...defaultProps}>{content}</Component>;
  }
  return <Component {...defaultProps} {...content} />;
};