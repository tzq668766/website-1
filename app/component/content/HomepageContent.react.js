"use strict";

import React from 'react';

var HomepageContent = React.createClass({
  render: function() {

    var svgDeviceMacbook = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1484 862" enable-background="new 0 0 1484 862" xml:space="preserve"><path class="backend" d="M1444,862h-90h-50h-50H230h-50h-50H40c0,0-40-6.29-40-14.001 C0,835.783,0,820,0,820h130v-8v-50V50c0-27.614,22.386-50,50-50h1124c27.614,0,50,22.386,50,50v712v50v8h130c0,0,0,15.783,0,27.999 C1484,855.71,1444,862,1444,862z"/><path class="frontend" d="M1444,862h-90h-50h-50H230h-50h-50H40c0,0-40-6.29-40-14.001 C0,835.783,0,820,0,820h130v-8v-50V50c0-27.614,22.386-50,50-50h1124c27.614,0,50,22.386,50,50v712v50v8h130c0,0,0,15.783,0,27.999 C1484,855.71,1444,862,1444,862z M637,820.5c0,8.56,6.94,15.5,15.5,15.5h179c8.56,0,15.5-6.94,15.5-15.5V820H637V820.5z M1312,50 H172v712h1140V50z"/></svg>';
    var svgDeviceiPadLandscape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1244 848" enable-background="new 0 0 1244 848" xml:space="preserve"><path class="backend" d="M1244,60v728c0,33.137-26.863,60-60,60H60 c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0h1124C1217.137,0,1244,26.863,1244,60z"/><path class="frontend" d="M1244,60v728c0,33.137-26.863,60-60,60H60 c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0h1124C1217.137,0,1244,26.863,1244,60z M1224,424c0-19.33-15.67-35-35-35 c-19.33,0-35,15.67-35,35c0,19.33,15.67,35,35,35C1208.33,459,1224,443.33,1224,424z M110,40v768h1024V40H110z"/></svg>';
    var svgDeviceiPadPortrait = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 848 1244" enable-background="new 0 0 848 1244" xml:space="preserve"><path class="backend" d="M788,1244H60c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0 h728c33.137,0,60,26.863,60,60v1124C848,1217.137,821.137,1244,788,1244z"/><path class="frontend" d="M788,1244H60c-33.137,0-60-26.863-60-60V60C0,26.863,26.863,0,60,0 h728c33.137,0,60,26.863,60,60v1124C848,1217.137,821.137,1244,788,1244z M424,1224c19.33,0,35-15.67,35-35c0-19.33-15.67-35-35-35 c-19.33,0-35,15.67-35,35C389,1208.33,404.67,1224,424,1224z M808,110H40v1024h768V110z"/></svg>';
    var svgDeviceiPhoneLandscape = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 847 415" enable-background="new 0 0 847 415" xml:space="preserve"><path class="backend" d="M50,0h747c27.614,0,50,22.386,50,50v315c0,27.614-22.386,50-50,50H50c-27.614,0-50-22.386-50-50V50 C0,22.386,22.386,0,50,0z"/><path class="frontend" d="M797,0H50C22.386,0,0,22.386,0,50v315c0,27.614,22.386,50,50,50h747c27.614,0,50-22.386,50-50V50 C847,22.386,824.614,0,797,0z M757,395H90V20h667V395z M802,239c-17.672,0-32-14.326-32-32s14.328-32,32-32 c17.674,0,32,14.326,32,32S819.674,239,802,239z"/></svg>';
    var svgDeviceiPhonePortrait = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 454 916" enable-background="new 0 0 454 916" xml:space="preserve"><path class="backend" d="M50,0h354c27.614,0,50,22.386,50,50v816c0,27.614-22.386,50-50,50 H50c-27.614,0-50-22.386-50-50V50C0,22.386,22.386,0,50,0z"/><path class="frontend" d="M404,916H50c-27.614,0-50-22.386-50-50V50C0,22.386,22.386,0,50,0 h354c27.614,0,50,22.386,50,50v816C454,893.614,431.614,916,404,916z M227,903c17.673,0,32-14.327,32-32s-14.327-32-32-32 s-32,14.327-32,32S209.327,903,227,903z M434,90H20v736h414V90z"/></svg>';

    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div className="wrap xl-gutter-24 lg-gutter-8 xl-center xl-middle xl-auto xl-mt8 xl-lh0 xl-py40">
          <div className="col xl-my8">
            <div
              className="device device--macbook xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500"
              dangerouslySetInnerHTML={{__html:svgDeviceMacbook}}/>
          </div>
          <div className="col xl-my8">
            <div
              className="device device--ipad-landscape xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500"
              dangerouslySetInnerHTML={{__html:svgDeviceiPadLandscape}}/>
          </div>
          <div className="col xl-my8">
            <div
              className="device device--ipad-portrait xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500"
              dangerouslySetInnerHTML={{__html:svgDeviceiPadPortrait}}/>
          </div>
          <div className="col xl-my8">
            <div
              className="device--iphone-landscape xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500 device"
              dangerouslySetInnerHTML={{__html:svgDeviceiPhoneLandscape}}/>
          </div>
          <div className="col xl-my8">
            <div
              className="device device--iphone-portrait xl-dib xl-br8 xl-px24 xl-py16 xl-co-black-500"
              dangerouslySetInnerHTML={{__html:svgDeviceiPhonePortrait}}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = HomepageContent;
