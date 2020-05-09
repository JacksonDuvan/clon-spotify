import React from "react";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import CarouselPlayList from "../components/CarouselPlayList";
import { connect } from "react-redux";
import * as dataActions from "../actions/dataActions";

import "../assets/styles/componets/MainView.css";

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.user.id;
    this.state = {
      isButton: true,
      isChange: true,

      isButtonPlay: true,
      isChangePlay: true,
    };
  }

  handleClick = () => {
    this.setState({
      isButton: !this.state.isButton,
      isChange: !this.state.isChange,
    });
  };

  handleClickPlaylist = () => {
    this.setState({
      isButtonPlay: !this.state.isButtonPlay,
      isChangePlay: !this.state.isChangePlay,
    });
  };

  componentDidMount() {
    this.props.artistData();
    this.props.albumsData();
    this.props.playlistData(this.id);
    this.props.getMe();
    this.props.loginSesion(true);
  }

  render() {
    const {
      artist: { items },
    } = this.props;
    const {
      albums: { albums },
    } = this.props;
    const itemsUserPlaylist = this.props.playlist.items;
    const { isSearching } = this.props;
    const search = this.props.searching.albums.items;
    const {
      user: { display_name },
    } = this.props;
    // console.log(this.props.isSesion)
    console.log(this.props.sesion);

    if (isSearching) {
      return (
        <div className="main-view">
          <Categories title="Albums">
            <Carousel>
              {search.map((album) => {
                return (
                  <CarouselItem
                    id={album.id}
                    name={album.name}
                    image={album.images[0].url}
                    label={album.label}
                  />
                );
              })}
            </Carousel>
          </Categories>
        </div>
      );
    } else {
      return (
        <div className="main-view">
          <Categories title={display_name}>
            <Carousel>
              {this.state.isButtonPlay
                ? itemsUserPlaylist.slice(0, 5).map((user) => {
                    return (
                      <CarouselPlayList
                        id={user.id}
                        name={user.name}
                        image={user.images[0].url}
                        label={user.label}
                      />
                    );
                  })
                : itemsUserPlaylist.map((user) => {
                    return (
                      <CarouselPlayList
                        id={user.id}
                        name={user.name}
                        image={user.images[0].url}
                        label={user.label}
                      />
                    );
                  })}
            </Carousel>
            <button className="btn_b" onClick={this.handleClickPlaylist}>
              {this.state.isChangePlay ? (
                <p>
                  Ver mas <div className="arrow"></div>
                </p>
              ) : (
                <p>
                  Ocultar <div className="arrow1"></div>
                </p>
              )}
            </button>
          </Categories>
          <Categories title="Coldplay">
            <Carousel>
              {this.state.isButton
                ? items.slice(0, 5).map((item) => {
                    return (
                      <CarouselItem
                        id={item.id}
                        name={item.name}
                        image={item.images[0].url}
                        label={item.release_date}
                      />
                    );
                  })
                : items.slice(0, 20).map((item) => {
                    return (
                      <CarouselItem
                        id={item.id}
                        name={item.name}
                        image={item.images[0].url}
                        label={item.release_date}
                      />
                    );
                  })}
            </Carousel>
            <button className="btn_b" onClick={this.handleClick}>
              {this.state.isChange ? (
                <p>
                  Ver mas <div className="arrow"></div>
                </p>
              ) : (
                <p>
                  Ocultar <div className="arrow1"></div>
                </p>
              )}
            </button>
          </Categories>

          <Categories title="Albums">
            <Carousel>
              {albums.map((album) => {
                return (
                  <CarouselItem
                    id={album.id}
                    name={album.name}
                    image={album.images[0].url}
                    label={album.label}
                  />
                );
              })}
            </Carousel>
          </Categories>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return state.dataReducer;
};
export default connect(mapStateToProps, dataActions)(MainView);
