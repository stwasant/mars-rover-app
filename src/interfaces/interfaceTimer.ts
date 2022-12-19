export interface ICountdownTimerParams {
    timer: number;
    interval?: number;
    autostart?: boolean;
    expireImmediate?: boolean;
    onExpire?: () => void;
    onReset?: () => void;
  }
  
  export declare type CountdownTimerResults = {
    countdown: number;
    isRunning: boolean;
    start: () => void;
    reset: () => void;
    pause: () => void;
  };