import React from 'react';
// import './randomChar.css';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .list-group {
        .list-group-item {
            .term {
                font-weight: bold;
            }
        }
    }
`;

const RandomChar = () => {
    return (
        <RandomBlock className="rounded">
            <h4>Random Character: John</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>male</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>11.03.1039</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>13.09.1089</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>Anarchy</span>
                </li>
            </ul>
        </RandomBlock>
    )
}

export default RandomChar;


// export default class RandomChar extends Component {

//     render() {

//         return (
//             <div className="random-block rounded">
//                 <h4>Random Character: John</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender </span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born </span>
//                         <span>11.03.1039</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died </span>
//                         <span>13.09.1089</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture </span>
//                         <span>Anarchy</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
