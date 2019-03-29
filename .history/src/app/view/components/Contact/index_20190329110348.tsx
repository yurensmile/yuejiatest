import * as React from 'react';
import * as style from './index.scss';

interface Props {
}
interface State {
}

class Contact extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }

  public render(): JSX.Element {
    return (
      <div className={style.component}>

      </div>
    );
  }
}

export default Contact;
