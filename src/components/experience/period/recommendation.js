import React from 'react';
import './recommendation.scss';

export default class Recommendation extends React.Component {
    render() {
        const re = this.props.data;
        return (
            <div className="row recommendation">
                <div className="col-12 text">
                    <div dangerouslySetInnerHTML={{ __html: re.text }} />
                </div>
                <div className="col-12 person">
                    <div className="float-right">
                        <img className="float-left" src={"media/" + re.colleague.image} alt={re.colleague.name} />
                        <div className="info">
                            <div className="name">{re.colleague.name}</div>
                            <div className="position"><span className="fa fa-user"></span> {re.colleague.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}