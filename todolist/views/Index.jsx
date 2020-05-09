const React = require('react');
const Default = require('./Default')

class Index extends React.Component{
    render(){
        const { list }=this.props;
        return(
            <Default>
                <h1>To Do List</h1>
                <div class='container'>

                    
                    {list == undefined ? 'Nothing to do ':list.map((items, index) => {
                        return (
                            <>
                           <h3>{items.name} </h3>
                           <form action={`/todo/${items._id}?_method=DELETE`} method="POST">
                               <input  type="submit" value="Completed" className="btn btn-link" ></input  >
                            </form>

                            </>
                        )
                    })
                    }
        <br/>
        <br/>
        </div>
        <div className="container">
        <form action="/todo" method="POST">
            <input class="u-full-width" type="text" placeholder="" name='name' required />
            <input class="btn btn-outline-warning" type="submit" value="Submit"/>
            </form>
        </div>
            
                    
              
           
           </Default>
        )
    }
}

module.exports = Index;