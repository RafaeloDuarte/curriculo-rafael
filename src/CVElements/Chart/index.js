import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
    {
        name: 'HTML', uv: 80, pv: 4800, fill: '#ff9a03',
    },
    {
        name: 'CSS', uv: 56, pv: 4800, fill: '#0368ff',
    },
    {
        name: 'Python', uv: 40, pv: 4800, fill: '#ffc658',
    },
    {
        name: 'Java', uv: 75, pv: 4800, fill: '#d0ed57',
    },
    {
        name: 'JavaScript', uv: 70, pv: 4800, fill: '#fbff03',
    },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
  };

export default class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
        <div>
            <h3>Gráfico de Proeficiência (%)</h3>
            <RadialBarChart width={500} height={300} cy={150} cx={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                <RadialBar minAngle={30} label={{ position: 'insideStart', fill: '#fff' }} background anticlockwise dataKey="uv" />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        </div>
    );
  }
}
