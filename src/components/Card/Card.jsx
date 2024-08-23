import { faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import { } from 'react'

const Card = (props) => {
  return (
    <div className='relative'>
      {props.isSaved ? (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#fca5a5" }}
          onClick={props.onRemove}
          className='text-red-500 bg-gray-200 rounded-md font-karla font-semibold text-sm px-3 py-1 ml-3 absolute mt-3'
        >
          Remover
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#86efac" }}
          onClick={props.onSave}
          className='text-green-500 bg-gray-200 rounded-md font-karla font-semibold text-sm px-3 py-1 ml-3 absolute mt-3'
        >
          Adicionar
        </motion.button>
      )}

      <div className='w-[280px] h-fit rounded-2xl bg-[#1A1A24] leading-3 group'>
        <img className='h-96 w-full rounded-t-2xl' src={props.image}/>
        <p className='text-gray-200 font-karla text-xl tracking-wide px-4 mt-4'>{props.title}</p>
        <div className='flex flex-row gap-3 px-4 p-4'>
          <p className='text-gray-200 font-karla font-light'>
              <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight:'5px', color:'#9e2d2d'}}/>{props.date}
          </p>
          <p className='text-gray-200 font-karla font-light'>
            <FontAwesomeIcon icon={faStar} style={{ marginRight:'5px', color:'#c4b42b'}}/>{props.vote}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
