import React, {Component} from 'react'

class IFrame extends Component {

    constructor(props) {
        super(props)
        this.sendMessageToIFrame = this.sendMessageToIFrame.bind(this)
    }

    componentDidMount() {
        window.addEventListener("message", this.receiveMessageFromIFrame);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessageFromIFrame);
    }

    shouldComponentUpdate() {
        return false; // disable re-rendering of IFrame content
    }

    // detection of state and sending data to IFrame component
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        // if (this.props(old) !== nextProps(new) {
        //     console.log('inside this')
        // }
    }

    receiveMessageFromIFrame(e) {
        document.getElementById('results').innerHTML = e.data.length ? e.data : ''
    }

    sendMessageToIFrame() {
        this.ifr.contentWindow.postMessage(document.getElementById('parentInput').value, '*');
    }

    render() {
        return (
            <div>
            <div className="autoMargin boxWidth leftAlign marginBottom30">
                <h1>Hello, I'm the parent component</h1>
                <div className="marginBottom30">
                    <span>Message:</span>&nbsp;<input type="text" id="parentInput" />
                    <button
                        type="button"
                        onClick={this.sendMessageToIFrame}
                        className="marginLeft10"
                    >
                        Send message to IFrame
                    </button>
                </div>
                <div>Received message from IFrame:&nbsp;<span id="results"></span></div>
            </div>

            <iframe
                title="innerFrame"
                src={this.props.src}
                height={this.props.height}
                width={this.props.width}
                ref={(f) => { this.ifr = f; }}
            />
            </div>
        )
    }
}

export default IFrame
