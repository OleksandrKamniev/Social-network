import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../../common/Preloader/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsLoading(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsLoading(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    })(UsersContainer);
var aba = 1;