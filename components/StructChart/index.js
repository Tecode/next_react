import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TREE from './treeConfig';
import styles from './index.less';

let svg;
let container;


class StructChart extends Component {
  constructor() {
    super();
    this.state = {
      chartDom: '#structChart',
      data: {
        companyName: '重庆渝宁化肥有限公司',
        dataType: 1,
        eid: 'root',
        entinvInfo: [],
        frInfo: [{
          color: 'green',
          conDate: '2011-06-15',
          dataType: 1,
          direction: 'bottom',
          eid: 'a6937a5b-98bc-4052-9d32-1f8f7e57b137',
          fundedRatio: '0.4000',
          id: 5,
          identifier: 'fff866ee-607e-4577-bd87-8786e0d780a5',
          idx: 0,
          isNeedExtends: false,
          isStock: false,
          loading: false,
          name: '重庆长宏农资有限公司',
          num: null,
          position: null,
          regCapCur: '人民币',
          scale: null,
          sign: 'frInfo',
          structureIndex: 0,
          subConam: '20.000000',
          treeInfo: {
            date: '出资日期: 2011-06-15',
            invest: '投资: 20.00万元',
            isFr: false,
            ratio: '占比: 40.00%',
            treeKey: 'name',
            treename: '重庆长宏农资有限公司',
            x0: 0,
            y0: 230,
            _subName: '司',
          }
        }],
        identifier: 'root',
        shareInfo: [
          {
            color: 'orange',
            conDate: '2010-12-20',
            dataType: 2,
            direction: 'top',
            eid: '799e28e7-aced-4584-a3f0-8b6eabeb4434',
            fundedRatio: '0.800000',
            id: 2,
            identifier: '6c0cf36e-509a-4407-aae1-30721eae97e6',
            idx: 0,
            isNeedExtends: false,
            isStock: false,
            loading: false,
            name: '张长蓉',
            num: null,
            position: null,
            regCapCur: '人民币',
            scale: null,
            structureIndex: 0,
            subConam: '320.000000',
            treeInfo: {
              date: '出资日期: 2010-12-20',
              invest: '投资: 320.00万元',
              isFr: false,
              ratio: '占比: 80.00%',
            },
            treeKey: 'name',
            treename: '张长蓉',
            x0: -75,
            y0: 0,
            _layerIndex: -1,
            _selector: '.hover-link-6c0cf36e-509a-4407-aae1-30721eae97e6,.border-6c0cf36e-509a-4407-aae1-30721eae97e6',
          },
          {
            color: 'orange',
            conDate: '2010-12-20',
            dataType: 2,
            direction: 'top',
            eid: '8e5f4895-6a4b-48e3-9663-785e9a269a83',
            fundedRatio: '0.200000',
            id: 3,
            identifier: '1c592d45-4262-48c0-bfe0-8d5f2a008e40',
            idx: 1,
            isNeedExtends: false,
            isStock: false,
            loading: false,
            name: '胡贤玲',
            num: null,
            position: null,
            regCapCur: '人民币',
            scale: null,
            structureIndex: 1,
            subConam: '80.000000',
            treeInfo: {
              date: '出资日期: 2010-12-20',
              invest: '投资: 80.00万元',
              isFr: false,
              ratio: '占比: 20.00%',
            },
            treeKey: 'name',
            treename: '胡贤玲',
            x0: 75,
            y0: 0,
            _layerIndex: -1,
            _selector: '.hover-link-1c592d45-4262-48c0-bfe0-8d5f2a008e40,.border-1c592d45-4262-48c0-bfe0-8d5f2a008e40',
          }
        ]
      }
    }
  }
    // 创建SVGDOM节点
    initSvgDom = (svgWidth, _svgHeight) => {
      // d3.select(this.state.chartDom).select('svg').remove();
      svg = d3.select(this.state.chartDom)
        .append('svg:svg')
        .attr('width', svgWidth)
        .attr('height', _svgHeight)
        .attr('id', 'structureChart')
        .style('transition', `height ${TREE.transitionTime}ms ease-in-out`)
        .classed('new-network-rect', true);
      // 添加LOGO
      // logo = svg.append('svg:g').attr('id', 'structureChartLogo').style('transition', `height ${TREE.transitionTime}ms ease-in-out`).html(this.logSVG);
      // 标记区
      svg.append('defs').append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 0 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('refX', 10)
        .attr('refY', 5)
        .attr('markerWidth', 20)
        .attr('markerHeight', 20)
        .attr('orient', 'auto').append('path')
        .attr('d', 'M4,2 L10,5 L4,8 L4,2')
        .attr('fill', TREE.arrow);
      svg.append('defs').append('marker')
        .attr('id', 'arrowBlue')
        .attr('viewBox', '0 0 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('refX', 10)
        .attr('refY', 5)
        .attr('markerWidth', 20)
        .attr('markerHeight', 20)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M4,2 L10,5 L4,8 L4,2')
        .attr('fill', TREE.arrowBlue);
      svg.append('defs').append('marker')
        .attr('id', 'arrowGreen')
        .attr('viewBox', '0 0 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('refX', 10)
        .attr('refY', 5)
        .attr('markerWidth', 20)
        .attr('markerHeight', 20)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M4,2 L10,5 L4,8 L4,2')
        .attr('fill', TREE.arrowGreen);
      svg.append('defs').append('marker')
        .attr('id', 'arrowOrange')
        .attr('viewBox', '0 0 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('refX', 10)
        .attr('refY', 5)
        .attr('markerWidth', 20)
        .attr('markerHeight', 20)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M4,2 L10,5 L4,8 L4,2')
        .attr('fill', TREE.arrowOrange);
      // 内容区
      container = svg.append('svg:g')
        .attr('id', 'structureChartContainer');
      // 根节点区
      container.append('svg:g')
        .classed('centerG', true).style('transition', `transform ${TREE.transitionTime}ms ease-in-out`);
  
      // 顶部数据区
      this.topGroup = container.append('svg:g')
        .classed('topG', true).style('transition', `transform ${TREE.transitionTime}ms ease-in-out`);
      this.topGroup.append('svg:g').classed('topGLinks', true);
      this.topGroup.append('svg:g').classed('topGHoverLinks', true);
      this.topGroup.append('svg:g').classed('topGNodes', true);
  
      // 底部数据区
      this.bottomGroup = container.append('svg:g')
        .classed('bottomG', true).style('transition', `transform ${TREE.transitionTime}ms ease-in-out`);
      this.bottomGroup.append('svg:g').classed('bottomGLinks', true);
      this.bottomGroup.append('svg:g').classed('bottomGHoverLinks', true);
      this.bottomGroup.append('svg:g').classed('bottomGNodes', true);
    };
  componentDidMount() {
    this.initSvgDom('100%', 600);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>My Title</title>
          <script src='https://d3js.org/d3.v5.min.js'></script>
        </Helmet>
        <div id='structChart'></div>
      </React.Fragment>
    );
  }
}

export default StructChart;