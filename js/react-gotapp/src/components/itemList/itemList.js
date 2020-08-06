import React from 'react';
// import './itemList.css';
import styled from 'styled-components';

const ListGroupItem = styled.li`
    cursor: pointer;
`;

const List = () => {
    return (
        <ul className="item-list list-group">
            <ListGroupItem className="list-group-item">John Snow</ListGroupItem>
            <ListGroupItem className="list-group-item">Brandon Stark</ListGroupItem>
            <ListGroupItem className="list-group-item">Geremy</ListGroupItem>
        </ul>
    )
}

export default List;

// export default class ItemList extends Component {

//     render() {
//         return (
//             <ul className="item-list list-group">
//                 <li className="list-group-item">
//                     John Snow
//                 </li>
//                 <li className="list-group-item">
//                     Brandon Stark
//                 </li>
//                 <li className="list-group-item">
//                     Geremy
//                 </li>
//             </ul>
//         );
//     }
// }