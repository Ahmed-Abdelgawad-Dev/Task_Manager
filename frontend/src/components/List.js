import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <p>{title}</p>
            <div>
              <button type='button' onClick={() => editItem(id)}><FaEdit /></button>
              <button type='button' onClick={() => removeItem(id)}><FaTrash /></button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
