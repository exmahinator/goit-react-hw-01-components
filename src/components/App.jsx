import Profile from './socialProfile/Profile';
import Statistic from './statistic/Statistic';
import user from '../constants/user.json';
import data from '../constants/data.json';
import Friends from './friendsList/Friends';
import friends from '../constants/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transaction from '../constants/transactions.json';

export const App = () => {
  return (
    <>
      <Profile data={user} />
      <Statistic title="UPLOAD STATS" data={data} />
      <Friends friendsData={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  );
};
