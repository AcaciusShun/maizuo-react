import  React, { Component } from 'react'

class ImagePlaceholder extends Component {
    render() {
        const { src, placeholder } = this.props
        const bgStyle = {
            backgroundImage:'url('+placeholder+')',
            backgroungSize:100+'%'
        }
        return (
            <div class="img-resopnsive" style={bgStyle}>
                <img ref="image" alt="" src={src} onLoad={ this.handleImageLoaded.bind(this)}  style={{width : 100+'%',transition:'all 1.2s ease',opacity:0}} />
            </div>
        )
    }
    handleImageLoaded(){
        this.refs['image'].style.opacity = 1
    }
}
export default ImagePlaceholder