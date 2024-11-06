import React, { useEffect } from 'react'
import {  Modal,   ModalContent,  
     ModalHeader,   ModalBody,   
     ModalFooter,
     useDisclosure} from "@nextui-org/modal";
import Image from 'next/image';

function CustomLoader({isLoading}:any) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    useEffect(()=>{
        onOpen();
    },[])
  return (
    <div>
   {isLoading&& <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-10 flex w-full items-center justify-center'>
                <Image src={'/loader.gif'} alt='loader' width={300} height={300}
                className='w-[200px] h-[200px]'/>
                <h2 className='font-bold text-2xl text-primary text-center'>Please Wait...</h2>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>}
      </div>
  )
}

export default CustomLoader