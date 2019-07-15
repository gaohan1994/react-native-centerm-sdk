import React from 'react';
import { ThemeConsumer, Colors } from './index';

export type ContextProps = {
  theme: {
    [key: string]: string
  }
}

const isClassComponent = Component => 
  Boolean(Component.prototype && Component.prototype.isReactComponent);

const ThemeHoc = (WrappedComponent, ThemeKey: string) => {

  type ThemeComponentProps = { 
    forwardedRef: any;
    children: any;
  }

  class ThemeComponent extends React.Component<ThemeComponentProps, any> {
    render () {
      const { forwardedRef, children, ...rest } = this.props;
      return (
        <ThemeConsumer>
          {
            (context: ContextProps) => {
              const props = {
                ...rest,
                children,
                theme: context && context.theme || Colors
              };
              if (isClassComponent(WrappedComponent)) {
                return <WrappedComponent ref={forwardedRef} {...props} />;
              }
              return <WrappedComponent {...props} />;
            }
          }
        </ThemeConsumer>
      );
    }
  }

  const name = ThemeKey 
    ? `Theme.${ThemeKey}`
    : `Theme.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;

  ThemeComponent.displayName = name;
  return ThemeComponent;
}

export default ThemeHoc;