import React, {Component} from 'react';
import Draggable from 'react-draggable';

class DraggableItem extends Component {

    render() {
        return (
                <Draggable>
                    <div className="box">I can be dragged anywhere</div>
                </Draggable>
        );
    }
}

export default DraggableItem;