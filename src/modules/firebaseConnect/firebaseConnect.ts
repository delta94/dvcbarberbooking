import { BillFields } from '@modules/BillBarbers/redux/action-types/list';
import { BookingFields } from '@modules/Booking/redux/action-types/list-booking';
import { branchFields } from '@modules/BranchBarber/redux/action-types/list';
import { CategoriesFields } from '@modules/CategoryBarbers/redux/action-types/list-category-barber';
import { CityFields } from '@modules/CityBarbers/redux/action-types/list-city-barber';
import { User } from '@modules/User/redux/action-types';
import { ProductBarberFields } from '@modules/ProductBarbers/redux/action-types/list-productbarber';
import { StaffFields } from '@modules/StaffBarbers/redux/action-types/list';
import { BookingUserFields } from '@modules/User/redux/action-types/list-booking-user';
import firebase from 'firebase';
const settings: any = { timestampsInSnapshots: true };
var firebaseConfig = {
  apiKey: 'AIzaSyBvqzdTt6p44H9nbI9zojcpX6Pvvb_LhDM',
  authDomain: 'dvcbaberbooking.firebaseapp.com',
  databaseURL: 'https://dvcbaberbooking.firebaseio.com',
  projectId: 'dvcbaberbooking',
  storageBucket: 'dvcbaberbooking.appspot.com',
  messagingSenderId: '936194742565',
  appId: '1:936194742565:web:85ff99c091e0ce64d322cc',
};
// Initialize Firebase
const firebaseConnect = firebase.initializeApp(firebaseConfig);

firebaseConnect.firestore().settings(settings);
export default firebaseConnect;

export const getAllBranchFromFirebase = async () => {
  const data = Array<branchFields>();
  const BranchColl = await firebase.firestore().collection('AllSalon');
  const ar = await BranchColl.get().then((snap) => {
    const r: string[] = [];
    snap.forEach((doc: any) => {
      r.push(doc.id);
    });
    return r;
  });

  for (var i = 0; i < ar.length; i++) {
    await BranchColl.doc(ar[i])
      .collection('Branch')
      .get()
      .then((snap) => {
        snap.forEach((doc: any) => {
          data.push({
            idCity: ar[i],
            id: doc.id,
            name: doc.data().name,
            address: doc.data().address,
            openHours: doc.data().openHours,
            phone: doc.data().phone,
            website: doc.data().website,
          });
        });
      });
  }
  return data;
};

export const getBranchByCityFromFirebase = async (idCity: string) => {
  const data = Array<branchFields>();

  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(idCity)
    .collection('Branch')
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        data.push({
          id: doc.id,
          address: doc.data().address,
          idCity: idCity,
          name: doc.data().name,
          openHours: doc.data().openHours,
          phone: doc.data().phone,
          website: doc.data().website,
        });
      });
    });

  return data;
};

export const createBranchBarberFirebase = async (data: branchFields) => {
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(data.idCity)
    .collection('Branch')
    .doc()
    .set({
      address: data.address,
      name: data.name,
      openHours: data.openHours,
      phone: data.phone,
      website: data.website,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllBillFromFirebase = async (year?: string) => {
  const data = Array<BillFields>();
  const CityColl = await firebase.firestore().collection('AllSalon');
  const idCityArray = await CityColl.get().then((snap) => {
    const idCityArray: string[] = [];
    snap.forEach((doc: any) => {
      idCityArray.push(doc.id);
    });
    return idCityArray;
  });

  for (var i = 0; i < idCityArray.length; i++) {
    const idBranchArray = await CityColl.doc(idCityArray[i])
      .collection('Branch')
      .get()
      .then((snap) => {
        const idBranchArray: string[] = [];
        snap.forEach((doc: any) => {
          idBranchArray.push(doc.id);
        });
        return idBranchArray;
      });

    for (var i1 = 0; i1 < idCityArray.length; i1++) {
      for (var j = 0; j < idBranchArray.length; j++) {
        await firebase
          .firestore()
          .collection('AllSalon')
          .doc(idCityArray[i1])
          .collection('Branch')
          .doc(idBranchArray[j])
          .collection('Invoices')
          .get()
          .then((snap) => {
            snap.forEach((doc: any) => {
              data.push({
                id: doc.id,
                idCity: idCityArray[i],
                idBranch: idBranchArray[i],
                finalPrice: doc.data().finalPrice,
                barberId: doc.data().barberId,
                barberName: doc.data().barberName,
                barberServices: doc.data().barberServices,
                customerName: doc.data().customerName,
                customerPhone: doc.data().customerPhone,
                imageUrl: doc.data().imageUrl,
                salonAddress: doc.data().salonAddress,
                salonId: doc.data().salonId,
                salonName: doc.data().salonName,
                shoppingItemList: doc.data().shoppingItemList,
                time: doc.data().time,
              });
            });
          });
      }
    }
  }
  if (year) {
    return data.filter((bill) => {
      return bill.time.slice(6, 11) === year;
    });
  } else {
    return data;
  }
};

export const getListBookingFromFirebase = async (year?: string) => {
  const data = Array<BookingFields>();
  const UserColl = await firebase.firestore().collection('User');
  await UserColl.doc()
    .get()
    .then((snap) => {
      console.log('snap', snap);
    });
  const ar = await UserColl.get().then((snap) => {
    const r: string[] = [];
    snap.forEach((doc: any) => {
      r.push(doc.id);
    });
    return r;
  });
  for (var i = 0; i < ar.length; i++) {
    await UserColl.doc(ar[i])
      .collection('Booking')
      .get()
      .then((snap) => {
        snap.forEach((doc: any) => {
          data.push({
            idCol: ar[i],
            id: doc.id,
            barberId: doc.data().barberId,
            barberName: doc.data().barberName,
            cartItemList: doc.data().cartItemList,
            cityBook: doc.data().cityBook,
            customerName: doc.data().customerName,
            customerPhone: doc.data().customerPhone,
            done: doc.data().done,
            salonAddress: doc.data().salonAddress,
            salonId: doc.data().salonId,
            salonName: doc.data().salonName,
            slot: doc.data().slot,
            time: doc.data().time,
            timestamp: doc.data().timestamp,
          });
        });
      });
  }
  if (year) {
    return data.filter((bk) => {
      return bk.done === true && bk.time.slice(6, 11) === year;
    });
  } else {
    return data;
  }
};

export const DeleteBookingFirebase = async (id: string, idCol: string) => {
  const UserColl = firebase.firestore().collection('User');
  UserColl.doc(idCol).collection('Booking').doc(id).delete();
};

export const getDetailBookingFromFirebase = async (id: string, idCol: string) => {
  const data = Array<BookingFields>();
  const UserColl = await firebase.firestore().collection('User');
  await UserColl.doc(idCol)
    .collection('Booking')
    .doc(id)
    .get()
    .then((snap) => {
      console.log('Snap', snap.data());
      console.log('Snap', id);
      console.log('Snap', idCol);
    });
  return data;
};

export const getDetailBranchFromFirebase = async (id: string, idCity: string) => {
  const data: branchFields = { id: '', address: '' };
  const UserColl = await firebase.firestore().collection('AllSalon');
  await UserColl.doc(idCity)
    .collection('Branch')
    .doc(id)
    .get()
    .then((doc) => {
      data.id = id;
      data.idCity = idCity;
      data.address = doc.data()?.address;
      data.name = doc.data()?.name;
      data.phone = doc.data()?.phone;
      data.website = doc.data()?.website;
      data.openHours = doc.data()?.openHours;

      console.log('Snap', id);
      console.log('Snap', idCity);
    });
  return data;
};

export const createCategoryBarberFirebase = async (data: CategoriesFields) => {
  await firebase
    .firestore()
    .collection('Shopping')
    .doc()
    .set({
      name: data.name,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteCategoryFirebase = async (id: string) => {
  await firebase.firestore().collection('Shopping').doc(id).delete();
  return id;
};

export const getDetailCategoryBarberFromFirebase = async (id: string) => {
  const user: CategoriesFields = { id: ' doc.id', name: 'doc.data()?.name' };
  await firebase
    .firestore()
    .collection('Shopping')
    .doc(id)
    .get()
    .then((doc) => {
      user.id = doc.id;
      user.name = doc.data()?.name;
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};

export const getListCategoryFromFirebase = async () => {
  const data = Array<CategoriesFields>();
  const UserColl = await firebase.firestore().collection('Shopping');

  await UserColl.get().then((snap) => {
    snap.forEach((doc: any) => {
      data.push({
        id: doc.id,
        name: doc.data().name,
      });
    });
  });

  return data;
};

export const createCityBarberFirebase = async (data: CityFields) => {
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(data.name)
    .set({
      name: data.name,
      status: data.status,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteCityFirebase = async (id: string) => {
  await firebase.firestore().collection('AllSalon').doc(id).delete();
  return id;
};

export const getDetailCityBarberFirebase = async (id: string) => {
  const data: CityFields = { id: '', name: '', status: false };
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(id)
    .get()
    .then((doc) => {
      data.id = doc.id;
      data.name = doc.data()?.name;
      data.status = doc.data()?.status;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getListCityFromFirebase = async () => {
  const data = Array<CityFields>();
  const AllsalonColl = await firebase.firestore().collection('AllSalon');

  await AllsalonColl.get().then((snap) => {
    snap.forEach((doc: any) => {
      data.push({
        id: doc.id,
        name: doc.data().name,
        status: doc.data().status,
      });
    });
  });

  return data;
};

export const updateCityBarberFirebase = async (data: CityFields) => {
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(data.id)
    .set({
      id: data.id,
      name: data.name,
      status: data.status,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProductBarberFirebase = async (data: ProductBarberFields) => {
  await firebase
    .firestore()
    .collection('Shopping')
    .doc(data.idCol)
    .collection('Items')
    .doc()
    .set({
      name: data.name,
      image: data.image,
      price: data.price,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteProductBarberFirebase = async (id: string, idCol: string) => {
  const UserColl = firebase.firestore().collection('User');
  UserColl.doc(idCol).collection('Booking').doc(id).delete();
};

export const getListProductFromFirebase = async () => {
  const data = Array<ProductBarberFields>();
  const UserColl = await firebase.firestore().collection('Shopping');
  const ar = await UserColl.get().then((snap) => {
    const r: string[] = [];
    snap.forEach((doc: any) => {
      r.push(doc.id);
    });
    return r;
  });

  for (var i = 0; i < ar.length; i++) {
    await UserColl.doc(ar[i])
      .collection('Items')
      .get()
      .then((snap) => {
        snap.forEach((doc: any) => {
          data.push({
            idCol: ar[i],
            id: doc.id,
            image: doc.data().image,
            name: doc.data().name,
            price: doc.data().price,
          });
        });
      });
  }
  return data;
};

export const getDetailStaffFromFirebase = async (id: string, idCity: string, idBranch: string) => {
  console.log('add', id + idCity + idBranch);
  const data: StaffFields = {
    id: '',
    idBranch: '',
    idCity: '',
    name: '',
    password: '',
    rating: 0,
    ratingTimes: 0,
    username: '',
    status: false,
    salary: 0,
    avatar: '',
  };
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(idCity)
    .collection('Branch')
    .doc(idBranch)
    .collection('Barbers')
    .doc(id)
    .get()
    .then((doc) => {
      {
        console.log('staff', doc.data());
        data.id = doc.id;
        data.name = doc.data()?.name;
        data.password = doc.data()?.password;
        data.rating = doc.data()?.rating;
        data.ratingTimes = doc.data()?.ratingTimes;
        data.username = doc.data()?.username;
        data.status = doc.data()?.status;
        data.idCity = idCity;
        data.idBranch = idBranch;
        data.salary = Number(doc.data()!.salary);
        data.avatar = doc.data()!.avatar;
      }
    });
  return data;
};

export const getListStaffFromFirebase = async () => {
  const data = Array<StaffFields>();
  const CityColl = await firebase.firestore().collection('AllSalon');
  const idCityArray = await CityColl.get().then((snap) => {
    const idCityArray: string[] = [];
    snap.forEach((doc: any) => {
      idCityArray.push(doc.id);
    });
    return idCityArray;
  });

  for (var i = 0; i < idCityArray.length; i++) {
    const idBranchArray = await CityColl.doc(idCityArray[i])
      .collection('Branch')
      .get()
      .then((snap) => {
        const idBranchArray: string[] = [];
        snap.forEach((doc: any) => {
          idBranchArray.push(doc.id);
        });
        return idBranchArray;
      });

    for (var i1 = 0; i1 < idCityArray.length; i1++) {
      for (var j = 0; j < idBranchArray.length; j++) {
        await firebase
          .firestore()
          .collection('AllSalon')
          .doc(idCityArray[i1])
          .collection('Branch')
          .doc(idBranchArray[j])
          .collection('Barbers')
          .get()
          .then((snap) => {
            snap.forEach((doc: any) => {
              data.push({
                id: doc.id,
                idCity: idCityArray[i],
                idBranch: idBranchArray[i],
                name: doc.data().name,
                password: doc.data().password,
                rating: doc.data().rating,
                ratingTimes: doc.data().ratingTimes,
                username: doc.data().username,
                status: doc.data().status,
                salary: doc.data().salary,
                avatar: doc.data().avatar,
              });
            });
          });
      }
    }
  }
  return data;
};

export const createUserFirebase = async (data: User) => {
  await firebase
    .firestore()
    .collection('User')
    .doc()
    .set({
      name: data.name,
      phoneNumber: data.phoneNumber,
      address: data.address,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteUserFirebase = async (id: string) => {
  await firebase
    .firestore()
    .collection('User')
    .doc(id)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailUserFromFirebase = async (id: string) => {
  const user: User = { id: ' doc.id', name: 'doc.data()?.name', phoneNumber: '', address: 'adad', status: false };
  await firebase
    .firestore()
    .collection('User')
    .doc(id)
    .get()
    .then((doc) => {
      user.id = doc.id;
      user.phoneNumber = doc.data()?.phoneNumber;
      user.name = doc.data()?.name;
      user.address = doc.data()?.address;
      user.status = doc.data()?.status;
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};

export const getListBookingByUserFromFirebase = async (id?: string) => {
  const data = Array<BookingUserFields>();
  await firebase
    .firestore()
    .collection('User')
    .doc(id)
    .collection('Booking')
    .get()
    .then((snap) => {
      snap.forEach((doc: any) => {
        data.push({
          id: doc.id,
          barberId: doc.data().barberId,
          barberName: doc.data().barberName,
          cartItemList: doc.data().cartItemList,
          cityBook: doc.data().cityBook,
          customerName: doc.data().customerName,
          customerPhone: doc.data().customerPhone,
          done: doc.data().done,
          salonAddress: doc.data().salonAddress,
          salonId: doc.data().salonId,
          salonName: doc.data().salonName,
          slot: doc.data().slot,
          time: doc.data().time,
          timestamp: doc.data().timestamp,
        });
      });
    });

  return data;
};

export const getListUserFromFirebase = async () => {
  const data = Array<User>();
  await firebase
    .firestore()
    .collection('User')
    .get()
    .then((snap) => {
      snap.forEach((doc: any) => {
        data.push({
          id: doc.id,
          name: doc.data().name,
          phoneNumber: doc.data()?.phoneNumber,
          address: doc.data()?.address,
          status: doc.data()?.status,
        });
      });
    });
  return data;
};

export const createStaffFirebase = async (data: StaffFields) => {
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(data.idCity)
    .collection('Branch')
    .doc(data.idBranch)
    .collection('Barbers')
    .doc()
    .set({
      name: data.name,
      password: data.password,
      rating: data.rating,
      ratingTimes: data.ratingTimes,
      username: data.username,
      status: data.status,
      avatar: data.avatar,
      salary: data.salary,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UpdateStaffFirebase = async (data: StaffFields) => {
  await firebase
    .firestore()
    .collection('AllSalon')
    .doc(data.idCity)
    .collection('Branch')
    .doc(data.idBranch)
    .collection('Barbers')
    .doc(data.id)
    .set({
      name: data.name,
      password: data.password,
      rating: data.rating,
      ratingTimes: data.ratingTimes,
      username: data.username,
      status: data.status,
      avatar: data.avatar,
      salary: Number(data.salary),
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UpdateUserFirebase = async (data: User) => {
  await firebase
    .firestore()
    .collection('User')
    .doc(data.id)
    .set({
      address: data.address,
      name: data.name,
      phoneNumber: data.phoneNumber,
      status: data.status,
    })
    .catch((err) => {
      console.log(err);
    });
};
