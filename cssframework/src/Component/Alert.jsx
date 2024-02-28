function AlertComponent(){
    return(
        <div>
            <button className="bg-blue-400 p-2 font-bold mx-20 m-8 rounded text-white">Button One</button>
            <div className="bg-red-100 border-2 p-3 border-red-500 b-2 mx-20 rounded">
                <span className="text-red-800 font-bold " >Alert!</span>
                <span className="text-red-700">This is awesome!</span>
            </div>
        </div>
    )
}

export default AlertComponent;