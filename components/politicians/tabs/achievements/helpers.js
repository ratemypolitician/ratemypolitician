export const badgeStatusColor = (status) => {
  if (status === 'In Progress') {
    return 'orange';
  }else if (status === 'Broken') {
    return 'red';
  }else if (status === 'On Hold') {
    return 'black';
  }else if (status === 'Completed') {
    return 'green';
  }
}
