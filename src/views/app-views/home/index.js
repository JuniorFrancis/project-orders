import React, { Component } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import OrderService from "services/OrderService";
import { PageHeaderAlt } from "components/layout-components/PageHeaderAlt";
import Flex from "components/shared-components/Flex";

export class CustomFilterPanel extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
    orders: '',
  };
 
  componentDidMount(){
    OrderService.getAllOrders()
        .then(response => this.setState({orders: response.data}));
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Número do pedido',
        dataIndex: 'orderId',
        key: 'orderId',
        width: '30%',
        ...this.getColumnSearchProps('orderId'),
      },
      {
        title: 'Produto',
        dataIndex: 'product',
        key: 'product',
        width: '20%',
        ...this.getColumnSearchProps('product'),
      },
      {
        title: 'Vendedor',
        dataIndex: 'seller',
        key: 'seller',
        ...this.getColumnSearchProps('seller'),
      },
      {
        title: 'País',
        dataIndex: 'country',
        key: 'country',
        ...this.getColumnSearchProps('country'),
      },
      {
        title: 'Valor',
        dataIndex: 'price',
        key: 'price',
        ...this.getColumnSearchProps('price'),
      },
    ];
    
    
    return (
      <>
      <PageHeaderAlt className="border-bottom">
          <div className="container-fluid">
              <Flex justifyContent="between" alignItems="center" className="py-4">
                  <h2>Pedidos</h2>
              </Flex>
          </div>
      </PageHeaderAlt>
          <Table columns={columns} dataSource={this.state.orders} style={{marginTop: "30px"}}/>
      </>
  )
  }
}

export default CustomFilterPanel;
