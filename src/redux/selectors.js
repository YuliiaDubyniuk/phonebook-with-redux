export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter;
export const getFilteredContacts = state => {
    const { filter, contacts } = state;
    if (!filter) {
        return contacts;
    }
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
}