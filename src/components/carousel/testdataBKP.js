export default [
      { 
        'id': '001',
        'image': 'https://dummyimage.com/600x400/000/ff0000',
        'title': 'Lorem Ipsum Dolor Sit Amet',
        'type': "Technology",
        'onClick': (item) => item.setState(state => ({visible: !item.state.visible}))
      },
      { 
        'id': '002',
        'image': 'https://dummyimage.com/600x400/000/00ff00',
        'title': 'Habitasse Magna Mattis Suscipit Odio',
        'type': "Politics",
        'onClick': (item) => item.setState(state => ({visible: !item.state.visible}))
      },
      { 
        'id': '003',
        'image': 'https://dummyimage.com/600x400/000/0000ff',
        'title': 'Morbi Porttitor Per Nascetur Primis Renenatis Scelerisque Sapien',
        'type': "International",
        'onClick': (item) => item.setState(state => ({visible: !item.state.visible}))
      }
    ]