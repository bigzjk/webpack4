import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss'

export class Search extends React.Component {
    constructor() {
        super()
        this.state={
            Text: null
        }
    }

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
                <div
                    style={{
                        display: 'block',
                        width: '200px',
                        height: '200px',
                        background: 'red'
                    }}
                    onClick={() => {
                        import('./test.js').then((Text) => {
                            console.log(Text.default)
                            this.setState({
                                Text: Text.default
                            })
                        })
                        
                    }}
                >click</div>
                {this.state.Text ? <this.state.Text /> : null}
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)