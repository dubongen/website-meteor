import React from 'react';
import { Embed } from 'semantic-ui-react';

export default class Logo extends React.Component {
  render() {
    return (
        <Embed
            autoplay={true}
            loop={true}
            placeholder='http://getwallpapers.com/wallpaper/full/1/6/7/36805.jpg'
            url='https://video.wixstatic.com/video/1f31ed_871711b9333045369e97e2c4a1e1d0d8/720p/mp4/file.mp4'
            source='mp4'
        />
    );
  }
}
