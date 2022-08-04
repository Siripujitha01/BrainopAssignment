import React from "react";
import PropTypes from "prop-types";
import image from "./img1.jpg";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import dat from "./data";

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
  x + width / 2
}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
  y + height
} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const Example = (props) => {
  let data = [dat[props.num]];
  return (
    <center>
      {" "}
      <div>
        <table>
          <tr>
            <td>
              <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Name" />
                <YAxis />
                <Legend />
                <Bar
                  dataKey="Warmth"
                  fill="pink"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Reasoning"
                  fill="#808000"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Emotional Stability"
                  fill="orange"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Dominance"
                  fill="brown"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Liveliness"
                  fill="green"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Rule Conciousness"
                  fill="#FA8072"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Social Boldness"
                  fill="grey"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Sensitivity"
                  fill="#00FF00"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Vigilance"
                  fill="#BC8F8F"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Abstractedness"
                  fill="#6495ED"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Privateness"
                  fill="#FFA07A"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Apprehension"
                  fill="#B0E0E6"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Openness to change"
                  fill="#BDB76B"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Self Reliance"
                  fill="#FF6347"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Perfectionism"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
                <Bar
                  dataKey="Tension"
                  fill="#B22222"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                ></Bar>
              </BarChart>
            </td>
            <td>
              <img src={image} alt="hello" height={400} />
            </td>
          </tr>
        </table>
      </div>
    </center>
  );
};

export default Example;
