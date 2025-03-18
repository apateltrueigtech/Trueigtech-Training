// import PropTypes from 'prop-types'
function Student (props){
    return(
        <div className="border 1px p-10px font-size 2em  ">
            <p>Name :{props.name} </p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent?"Yes":"No"}</p>
        </div>
    )
}

export default Student