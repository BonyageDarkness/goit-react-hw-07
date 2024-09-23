import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
import { selectNameFilter } from './filtersSlice';

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    },
);
