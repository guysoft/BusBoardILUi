import UpdatesService from './updatesService';

const updatesService = new UpdatesService();

updatesService.getBuses('32.0744198', '34.795655200000056').then((buses) => {
    console.log(buses);
});
