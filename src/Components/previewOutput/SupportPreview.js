import React from 'react';
import previewSupportData from '../../Data/previewSupportData';

export default function SupportPreview() {
    return (
        <>
            {previewSupportData.bmc.value &&
                < a target='_blank' href={`${previewSupportData.bmc.default}` + `${previewSupportData.bmc.value}`
                }>
                    <img src={`${previewSupportData.bmc.img}`} className='support-img' />
                </a >
            }
        </>
    )
}