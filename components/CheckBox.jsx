function CheckBox(props) {
    return (
      <>
        <div className="flex">
            <input type="checkbox" className=""/>
            <p className="ml-2">{props.text}</p>
        </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-400 mb-2"></hr>

      </>
    );
  }
  
  export default CheckBox;