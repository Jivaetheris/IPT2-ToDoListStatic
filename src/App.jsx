import AddButton from '../components/AddButton'
import DeleteButton from '../components/DeleteButton'
import CheckBox from '../components/CheckBox'
function App() {

  return (
    <>
      <div className='w-170 mx-auto'>
        <h1 className='drop-shadow-md place-content-center text-2xl font-medium grid justify-items-center'>To-Do List</h1>
        <CheckBox text="Learn React"/>
        <CheckBox text="Build a To-Do List"/>
        <CheckBox text="Master JavaScript"/>
        <CheckBox text="Apply for Jobs"/>

          <div className='flex float-right'>
            <div className='mr-3'>
              <AddButton/>
            </div>
            <div>
              <DeleteButton/>
            </div>
          </div>
         
      </div>
    </>
  )
}

export default App
