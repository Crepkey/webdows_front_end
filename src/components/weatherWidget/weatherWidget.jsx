import React, {Component} from 'react';
import Draggable from 'react-draggable';

class WeatherWidget extends Component {
    state={

    };

    render() {
        return (
            <Draggable>
                <div>
                    <h1>HELLO WORLD</h1>
                </div>
            </Draggable>
        );
    }
}

export default WeatherWidget;