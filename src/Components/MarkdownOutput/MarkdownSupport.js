import React from 'react';
import data from '../../Data/previewSupportData'

export default function MarkdownSupport() {
    return (
        <div className="markdown_support">
            {data.bmc.value && <p>{data.bmc.start_tag}{data.bmc.default}{data.bmc.value}{data.bmc.mid_tag}{data.bmc.img}{data.bmc.end_tag}</p>}
        </div>
    );
}