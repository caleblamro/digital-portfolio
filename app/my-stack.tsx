import React from 'react';
import * as d3 from 'd3';

const MyStack = () => {
  const width = window.innerWidth;
  const height = 500;
  const svg = d3.select('#stack').append('svg').attr('width', width).attr('height', height);

  const stackData = [
    { name: 'Languages', value: 80, color: '#1f77b4' },
    { name: 'Frameworks', value: 70, color: '#2ca02c' },
    { name: 'AI & Data', value: 60, color: '#ff7f0e' },
    { name: 'Infrastructure', value: 90, color: '#9467bd' }
  ];

  const arc = d3.arc()
    .outerRadius(100)
    .innerRadius(30);

  const pie = d3.pie()
    .value(d => d.value);

  const data = pie(stackData);

  const gradient = svg.append('radialGradient')
    .attr('id', 'stackGradient')
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', stackData[0].color);

  const path = svg.selectAll('path')
    .data(data)
    .join('path')
    .attr('d', arc)
    .style('fill', d => gradient.getComputedLength(d3.select(this).attr('id')))
    .on('mouseover', function() {
      d3.select(this).transition().duration(200).attr('fill', d => d.color);
    })
    .on('mouseout', function() {
      d3.select(this).transition().duration(200).attr('fill', 'currentColor');
    });

  // Add animation: spin the pie chart
  requestAnimationFrame(spin);
  function spin() {
    const newData = data.map(d => ({ ...d, startAngle: d.startAngle + 0.01 }));
    path.data(newData)
      .transition().duration(3000)
      .attrTween('d', () => d3.interpolate(data, newData));
    requestAnimationFrame(spin);
  }

  return <div id='stack'/>;
};
export default MyStack;

// CSS (add to /public/my-stack.css or inline)</style>
<style>
  #stack { width: 100%; height: 500px; }
  path { cursor: pointer; }
</style>