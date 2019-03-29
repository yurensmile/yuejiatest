import 'yuejia/style/base.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import DatePicker from 'yuejia/component/DatePicker';
import newDate from 'yuejia/utils/newDate';
import Service from 'yuejia/component/DatePicker/service';
import Model, { Context } from 'yuejia/component/Model';

interface Props{

}

interface State {

}

class Demo extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }

  private yyMMddHHmmService: Service = new Service({
    fieldKey: 'yyMMddHHmm',
    fieldName: '年月日小时分钟'
  });

  public render(): JSX.Element {
    return (
      <Context.Consumer>
        {() => (
          <React.Fragment>
            <h2>年份月份</h2>
            <DatePicker
              minDate={newDate('2018-03')}
              maxDate={newDate('2019-04')}
              mode="yyMM"
            />

          <h2>日期</h2>
          <DatePicker
            minDate={newDate('2018-03-31')}
            mode="yyMMdd"
            onOk={(value) => console.log(value)}
          />

          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

ReactDOM.render((
  <Model>
    {(value) => (
      <Context.Provider value={value}>
        <Demo/>
      </Context.Provider>
    )}
  </Model>
), document.getElementById('root'));