declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      // Add other settings you need
    }

    interface SliderProps extends Settings {
        children?: React.ReactNode; // This allows children prop
      }
    
      export default class Slider extends Component<SliderProps> {}
  
  }
  