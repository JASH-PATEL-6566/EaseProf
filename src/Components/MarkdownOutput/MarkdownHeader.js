import React from 'react';
import data from '../../Data/outputHeaderData';

export default function MarkdownHeader() {
    return (
        <em>
            {data.hello.value && <p>{data.hello.tag_start}{data.hello.prev}{data.hello.value}{data.hello.tag_end}</p>}
            {data.sub.value && <p>{data.sub.tag_start}{data.sub.prev}{data.sub.value}{data.sub.tag_end}</p>}
            {data.long.value && <p>{data.long.tag_start}{data.long.prev}{data.long.value}{data.long.tag_end}</p>}
            {/* list item */}
            {data.based.value && data.based.main_start}
            {data.based.value && <p>*    {data.based.sub_start}{data.based.prev}{data.based.tag_start}{data.based.value}{data.based.tag_end}{data.based.sub_end}</p>}
            {data.port.value && data.port.link ? <p>*    {data.port.sub_start}{data.port.prev}{data.port.tag_start}{data.port.value}{data.port.tag_end}{data.port.sub_end}</p> : ''}
            {data.contact.value && <p>*    {data.contact.sub_start}{data.contact.prev}{data.contact.tag_start}{data.contact.value}{data.contact.tag_end}{data.contact.sub_end}</p>}
            {data.current.value && data.current.link ? <p>*    {data.current.sub_start}{data.current.prev}{data.current.tag_start}{data.current.value}{data.current.tag_end}{data.current.sub_end}</p> : ''}
            {data.learn.value && <p>*    {data.learn.sub_start}{data.learn.prev}{data.learn.tag_start}{data.learn.value}{data.learn.tag_end}{data.learn.sub_end}</p>}
            {data.open.value && <p>*    {data.open.sub_start}{data.open.prev}{data.open.tag_start}{data.open.value}{data.open.tag_end}{data.open.sub_end}</p>}
            {data.else.value && <p>*    {data.else.sub_start}{data.else.prev}{data.else.tag_start}{data.else.value}{data.else.tag_end}{data.else.sub_end}</p>}

            {data.based.value && data.based.main_end}
        </em>
    )
}