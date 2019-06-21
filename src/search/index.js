import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss'
export class Search extends React.Component {

    render(){
        return( 
            <div className="search">
                react
                <p
                    onClick={()=>{
                        location.href = './index.html'
                    }}
                >
                    goback Index
                    
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)