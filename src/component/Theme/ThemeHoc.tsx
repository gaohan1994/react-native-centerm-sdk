import React from 'react';
import { ThemeConsumer, Colors } from './index';
import { ColorsType } from './Colors';

type Exclude<T, U> = T extends U ? never : T;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type HOC<InjectProps> = <Props extends InjectProps>(Component: React.ComponentType<Props>) => 
  React.ComponentType<Omit<Props, keyof InjectProps>>;

export type ThemeType = ColorsType;

export type ContextProps = {
  theme: ThemeType;
};

const isClassComponent = (Component: any) => 
  Boolean(Component.prototype && Component.prototype.isReactComponent);

const ThemeHoc: HOC<{}> = (WrappedComponent: any) => {
  class ThemeComponent extends React.Component<any, any> {
    render () {
      const { forwardedRef, children, ...rest } = this.props;
      return (
        <ThemeConsumer>
          {
            (context: any) => {
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

  /**
   * const name = ThemeKey 
   * ? `Theme.${ThemeKey}`
   * : `Theme.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
   * ThemeComponent['displayName'] = name;
   */
  return ThemeComponent;
};  

export default ThemeHoc;