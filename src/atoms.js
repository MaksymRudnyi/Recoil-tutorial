import { atom, selector, selectorFamily, waitForAll } from 'recoil';

const todoListState = atom({
    key: 'todoListState',
    default: [],
});

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
});

const currentUserInfoQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
        const response = await fetch(`http://swapi.dev/api/people/${get(currentUserIDState)}`);

        if (response.ok) {
            let json = await response.json();

            return json;
        }
        return 'Error';

    },
});

const currentUserNameQuery = selector({
    key: 'currentUserName',
    get: ({ get }) => {
        const user = get(currentUserInfoQuery);

        return user.name
    }
})

const currentMovieQuery = selectorFamily({
    key: 'CurrentMovie',
    get: filmUrl => async ({ get }) => {
        const response = await fetch(filmUrl);

        if (response.ok) {
            let json = await response.json();

            return json;
        }

        return 'Error';
    },
});

const moviesInfoQuery = selector({
    key: 'MoviesInfoQuery',
    get: ({ get }) => {
        const { films } = get(currentUserInfoQuery);
        if (!films || !films.length) {
            return []
        }
        return get(waitForAll(films.map(filmUrl => currentMovieQuery(filmUrl))));
    },
});

export {
    todoListState,
    todoListFilterState,
    filteredTodoListState,
    todoListStatsState,
    currentUserNameQuery,
    currentUserIDState,
    moviesInfoQuery
}