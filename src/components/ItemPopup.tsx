import React, { useState } from 'react';
import CustomSelect from '../utilities/CustomSelect'
import QuantitySelector from '../utilities/QuantitySelector'

type PopupProps = {
    item: string;
    options: any;
    onClose: () => void;
};

const ItemPopup: React.FC<PopupProps>  = ({item, options, onClose }) => {

    const [itemDetails, setItemDetails] = useState<any>({})
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const setItemPrice = (selectMulti: boolean, selectionName: any, val: any) => {
        console.log(val);
        const updatedItemDetails: any = {...itemDetails}
        updatedItemDetails[selectionName] = (selectMulti? val : [val])
        setItemDetails({...updatedItemDetails })
        const costArray = Object.keys(updatedItemDetails).map((item: any)=>{
            return updatedItemDetails[item].reduce((sum: number, price: any)=> sum + price.price, 0)
        })
        setTotalPrice(costArray.reduce((sum: number, price: number) => sum + price, 0 ))
        console.log(itemDetails, totalPrice)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6">
                <div className='!mb-4 flex justify-between'>
                    <div className="text-xl font-bold ">{item}</div>
                    <button
                        onClick={onClose}
                        className="rounded "
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" className="c-pieIcon c-pieIcon--close" width="20" height="20"><path d="M11.868 3.205 8 7.073 4.133 3.205l-.928.928L7.073 8l-3.868 3.868.928.927L8 8.928l3.868 3.867.927-.927L8.928 8l3.867-3.867-.927-.928Z"></path></svg>                   
                    </button>
                </div>
                <div className='max-h-[60vh] overflow-y-auto'>
                    <img className='p-2' src={options.img}></img>
                    <div>
                        {options.selections.map((selection: any)=>{
                            return (
                                <div className='mt-[16px]'>
                                    <h2 className='text-xl font-bold text-orange-600'>{selection.name}</h2>
                                    <CustomSelect
                                        selectionName={selection.name}
                                        options={Object.keys(selection.items).map((item: any)=>{return {name: item, price: selection.items[item]}})}
                                        multiSelect={selection.selectMulti} // toggle to true for multi select
                                        maxSelect = {selection.maxSelect}
                                        onChange={(val) =>{ setItemPrice(selection.selectMulti, selection.name, val) }}
                                    />

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='!mt-4 flex justify-between'>
                    <QuantitySelector 
                        max={10}
                        defaultValue={1}
                        onChange={(val) => console.log("Quantity changed to:", val)}
                    />
                    <button
                        onClick={onClose}
                        className="border rounded-md w-[65%] px-4 py-2 w-fit shadow-sm"
                        >
                        $ {totalPrice}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemPopup;
