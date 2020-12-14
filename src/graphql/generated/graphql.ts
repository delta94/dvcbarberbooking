import type { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Users>;
  user?: Maybe<User>;
  topUsers?: Maybe<Array<TopUser>>;
  me?: Maybe<User>;
  /** Get all supplier in System */
  getAllSuppliers: Array<Supplier>;
  getAllSuppliersNone: Array<Supplier>;
  getAllSuppliersAdmin: Array<Supplier>;
  categories?: Maybe<Array<Category>>;
  products?: Maybe<Products>;
  product?: Maybe<Product>;
  vouchers?: Maybe<Vouchers>;
  voucher?: Maybe<Vouchers>;
  games?: Maybe<Games>;
  game?: Maybe<Game>;
  /** available Games for end user */
  availableGames?: Maybe<Games>;
  /**
   * current game or last game player played if not pass gameId.
   * If pass a new game (not is current game) remaining turns will be reset
   */
  currentGame?: Maybe<CurrentGame>;
  playerTransactions: PlayerTransactions;
  gifts?: Maybe<Gifts>;
  gift?: Maybe<Gift>;
  receivedGifts?: Maybe<ReceivedGifts>;
  configurations: Configurations;
};

export type QueryUsersArgs = {
  filters?: Maybe<UserFilters>;
  pagination: BasePaginationInput;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryTopUsersArgs = {
  byDate: TopUserByDate;
  limit: Scalars['Int'];
};

export type QueryProductsArgs = {
  filters?: Maybe<ProductFilters>;
  pagination: BasePaginationInput;
};

export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
};

export type QueryVouchersArgs = {
  filters?: Maybe<VoucherFilters>;
  pagination: BasePaginationInput;
};

export type QueryVoucherArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
};

export type QueryGamesArgs = {
  filters?: Maybe<GameFilters>;
  pagination: BasePaginationInput;
};

export type QueryGameArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryAvailableGamesArgs = {
  pagination: BasePaginationInput;
};

export type QueryCurrentGameArgs = {
  gameId?: Maybe<Scalars['ID']>;
};

export type QueryPlayerTransactionsArgs = {
  filters?: Maybe<PlayerTransactionFilters>;
  pagination: BasePaginationInput;
};

export type QueryGiftsArgs = {
  filters?: Maybe<GiftFilters>;
  pagination: BasePaginationInput;
};

export type QueryGiftArgs = {
  id: Scalars['ID'];
};

export type QueryReceivedGiftsArgs = {
  filters?: Maybe<ReceivedGiftsFilters>;
  pagination: BasePaginationInput;
};

export enum TopUserByDate {
  Daily = 'DAILY',
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
}

export type Mutation = {
  __typename?: 'Mutation';
  updateProfile?: Maybe<User>;
  changePassword?: Maybe<Scalars['Boolean']>;
  loginWithCredential: Jwt;
  adminLogin: Jwt;
  logout: Scalars['Boolean'];
  refreshToken: Jwt;
  loginWithFacebookInstantSignature: Jwt;
  singleUpload?: Maybe<Media>;
  createSupplier: Supplier;
  updateSupplier: Scalars['Boolean'];
  deleteSupplier: Scalars['Boolean'];
  createCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Category>;
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  createVoucher?: Maybe<Voucher>;
  updateVoucher?: Maybe<Voucher>;
  deleteVoucher?: Maybe<Voucher>;
  createGame?: Maybe<Game>;
  updateGame?: Maybe<Game>;
  deleteGame?: Maybe<Game>;
  /** Quay tra ve ket qua va token xac nhan. Sau khi quay xong goi api takeMyLuck de nhan diem hoac qua */
  tryMyLuck: LuckyResult;
  /** Nhan diem sau khi quay xong */
  takeMyLuck: MyLucky;
  receiveGift?: Maybe<ReceivedGift>;
  updateReceiveGiftStatus?: Maybe<ReceivedGift>;
  setConfigurations: Configurations;
};

export type MutationUpdateProfileArgs = {
  data?: Maybe<UserInput>;
};

export type MutationChangePasswordArgs = {
  data?: Maybe<ChangePasswordInput>;
};

export type MutationLoginWithCredentialArgs = {
  data: MutationLoginWithCredentialInput;
};

export type MutationAdminLoginArgs = {
  data: MutationLoginWithCredentialInput;
};

export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationLoginWithFacebookInstantSignatureArgs = {
  signature: Scalars['String'];
};

export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type MutationCreateSupplierArgs = {
  input?: Maybe<CreateSupplierInput>;
};

export type MutationUpdateSupplierArgs = {
  input?: Maybe<UpdateSupplierInput>;
};

export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  data: CategoryInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationCreateProductArgs = {
  data: ProductInput;
};

export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data: ProductInput;
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type MutationCreateVoucherArgs = {
  data: VoucherInput;
};

export type MutationUpdateVoucherArgs = {
  id: Scalars['ID'];
  data: VoucherInput;
};

export type MutationDeleteVoucherArgs = {
  id: Scalars['ID'];
};

export type MutationCreateGameArgs = {
  data: GameInput;
};

export type MutationUpdateGameArgs = {
  id: Scalars['ID'];
  data: GameInput;
};

export type MutationDeleteGameArgs = {
  id: Scalars['ID'];
};

export type MutationTakeMyLuckArgs = {
  token?: Maybe<Scalars['String']>;
};

export type MutationReceiveGiftArgs = {
  data: ReceiveGiftInput;
};

export type MutationUpdateReceiveGiftStatusArgs = {
  id: Scalars['ID'];
  status: ReceivedGiftStatus;
};

export type MutationSetConfigurationsArgs = {
  input: ConfigurationsInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  peopleId?: Maybe<Scalars['String']>;
  isEmailVerified: Scalars['Boolean'];
  password?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Media>;
  isPlayed: Scalars['Boolean'];
  playerFBIId?: Maybe<Scalars['String']>;
  energy: Scalars['Int'];
  points: Scalars['Int'];
  energyWillBeUpdatedAt: Scalars['Int'];
  /**
   * Bằng với giá trị number of play của game.
   * Sẽ trừ đi 1 sau mỗi lượt quay
   * Không có giá trị = 0, nếu trừ về 0 thì được gán lại bằng giá trị numberOfPlay của game
   * Khi current game thay đổi giá trị được gán lại bằng numberOfPlay của game mới
   */
  currentRemainingTurns: Scalars['Int'];
  currentGameId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  jobTitle?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  peopleId?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  count?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
};

export type TopUser = {
  __typename?: 'TopUser';
  user?: Maybe<User>;
  userId: Scalars['ID'];
  totalPoints?: Maybe<Scalars['Float']>;
};

export type UserFilters = {
  query?: Maybe<Scalars['String']>;
  role?: Maybe<Array<RoleCodes>>;
};

export type Jwt = {
  __typename?: 'JWT';
  uid?: Maybe<Scalars['ID']>;
  /** User access token */
  token: Scalars['String'];
  /** Access token will be expired at */
  expiresAt: Scalars['Int'];
  /** Refresh token */
  refreshToken: Scalars['String'];
  /** Refresh token expired at */
  refreshTokenExpiresAt: Scalars['Int'];
  payload?: Maybe<User>;
};

export type MutationLoginWithCredentialInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Paginate = {
  __typename?: 'Paginate';
  pageIndex?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
  pageSize: Scalars['Int'];
  totalItems?: Maybe<Scalars['Int']>;
};

export enum RoleCodes {
  User = 'USER',
  Staff = 'STAFF',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
}

export enum ErrorCodes {
  GraphqlParseFailed = 'GRAPHQL_PARSE_FAILED',
  GraphqlValidationFailed = 'GRAPHQL_VALIDATION_FAILED',
  Unauthenticated = 'UNAUTHENTICATED',
  Forbidden = 'FORBIDDEN',
  BadUserInput = 'BAD_USER_INPUT',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  UserNotEnoughEnergy = 'USER_NOT_ENOUGH_ENERGY',
}

export enum TimeZone {
  GmtPlus_7 = 'GMT_PLUS_7',
}

export enum Currency {
  Usd = 'USD',
  Vnd = 'VND',
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Others = 'OTHERS',
}

export type BasePaginationInput = {
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['ID']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  createdBy: Scalars['ID'];
  creator: User;
};

export type CreateSupplierInput = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
};

export type UpdateSupplierInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']>;
  creator?: Maybe<User>;
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type CategoryInput = {
  name: Scalars['String'];
  imageMediaId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type Products = {
  __typename?: 'Products';
  count?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Product>>;
};

export type ProductFilters = {
  categoryId?: Maybe<Scalars['ID']>;
  supplierId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  version: Scalars['Int'];
  sku: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  vouchers?: Maybe<Array<Voucher>>;
  inventoryNumber?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  categoryId: Scalars['ID'];
  supplierId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  supplier?: Maybe<Supplier>;
  creator?: Maybe<User>;
  activated: Scalars['Boolean'];
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type ProductInput = {
  name: Scalars['String'];
  sku: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  activated?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['ID'];
  supplierId: Scalars['ID'];
  inventoryNumber: Scalars['Int'];
  imageMediaId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type Vouchers = {
  __typename?: 'Vouchers';
  count?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<Array<Voucher>>;
};

export type VoucherFilters = {
  productId?: Maybe<Scalars['ID']>;
};

export type Voucher = {
  __typename?: 'Voucher';
  id: Scalars['ID'];
  name: Scalars['String'];
  sku: Scalars['String'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
  unit: VoucherUnit;
  product?: Maybe<Product>;
  productId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  activated: Scalars['Boolean'];
  creator?: Maybe<User>;
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export enum VoucherUnit {
  Percent = 'PERCENT',
  Price = 'PRICE',
}

export type VoucherInput = {
  sku: Scalars['String'];
  unit: VoucherUnit;
  price?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
  activated?: Maybe<Scalars['Boolean']>;
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  imageMediaId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['ID'];
  uri: Scalars['String'];
  size: Scalars['Int'];
  fileType: Scalars['String'];
  fileName: Scalars['String'];
  type: MediaType;
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export enum MediaType {
  Photo = 'PHOTO',
  Video = 'VIDEO',
  File = 'FILE',
  Other = 'OTHER',
}

export type CurrentGame = {
  __typename?: 'CurrentGame';
  game: Game;
  /**
   * Bằng với giá trị number of play của game.
   * Sẽ trừ đi 1 sau mỗi lượt quay
   * Không có giá trị = 0, nếu trừ về 0 thì được gán lại bằng giá trị numberOfPlay của game
   * Khi current game thay đổi giá trị được gán lại bằng numberOfPlay của game mới
   */
  remainingTurns: Scalars['Int'];
  /** Giá trị sẽ bị giảm khi quay lươt đầu tiên */
  remainingEnergy: Scalars['Int'];
};

export type LuckyResult = {
  __typename?: 'LuckyResult';
  gameItem: GameItem;
  token: Scalars['String'];
  remainingTurns: Scalars['Int'];
  remainingEnergy: Scalars['Int'];
};

export type MyLucky = {
  __typename?: 'MyLucky';
  transactionId: Scalars['ID'];
  points: Scalars['Int'];
  remainingTurns: Scalars['Int'];
  remainingEnergy: Scalars['Int'];
};

export type Games = {
  __typename?: 'Games';
  count?: Maybe<Scalars['Int']>;
  games?: Maybe<Array<Game>>;
};

export type GameFilters = {
  type?: Maybe<GameType>;
  activated?: Maybe<Scalars['Boolean']>;
  isIntro?: Maybe<Scalars['Boolean']>;
  productId?: Maybe<Scalars['ID']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID'];
  isIntro: Scalars['Boolean'];
  numberOfPlay: Scalars['Int'];
  type: GameType;
  productId: Scalars['ID'];
  product?: Maybe<Product>;
  imageId: Scalars['ID'];
  image?: Maybe<Media>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<Array<GameItem>>;
  creator?: Maybe<User>;
  activated: Scalars['Boolean'];
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type GameItem = {
  __typename?: 'GameItem';
  id: Scalars['ID'];
  percent: Scalars['Float'];
  points?: Maybe<Scalars['Float']>;
  type: GameItemType;
  productId?: Maybe<Scalars['ID']>;
  product?: Maybe<Product>;
  voucherId?: Maybe<Scalars['ID']>;
  voucher?: Maybe<Voucher>;
  creator?: Maybe<User>;
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export enum GameType {
  LuckyWheel = 'LUCKY_WHEEL',
}

export enum GameItemType {
  Product = 'PRODUCT',
  Voucher = 'VOUCHER',
  Point = 'POINT',
}

export type GameInput = {
  productId: Scalars['ID'];
  imageId: Scalars['ID'];
  numberOfPlay: Scalars['Int'];
  type: GameType;
  activated?: Maybe<Scalars['Boolean']>;
  isIntro?: Maybe<Scalars['Boolean']>;
  items: Array<GameItemInput>;
  description?: Maybe<Scalars['String']>;
};

export type GameItemInput = {
  productId?: Maybe<Scalars['ID']>;
  voucherId?: Maybe<Scalars['ID']>;
  points?: Maybe<Scalars['Float']>;
  percent: Scalars['Float'];
  type: GameItemType;
};

export type PlayerTransactionFilters = {
  userId?: Maybe<Scalars['ID']>;
  gameId?: Maybe<Scalars['ID']>;
};

export type PlayerTransaction = {
  __typename?: 'PlayerTransaction';
  id: Scalars['ID'];
  gameId?: Maybe<Scalars['ID']>;
  game?: Maybe<Game>;
  remainingTurns?: Maybe<Scalars['Int']>;
  remainingEnergy?: Maybe<Scalars['Int']>;
  type: GameItemType;
  productId?: Maybe<Scalars['ID']>;
  product?: Maybe<Product>;
  productVersion?: Maybe<Scalars['Int']>;
  voucherId?: Maybe<Scalars['ID']>;
  voucher?: Maybe<Voucher>;
  voucherVersion?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['ID']>;
  player?: Maybe<User>;
  taken?: Maybe<Scalars['Boolean']>;
  received?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PlayerTransactions = {
  __typename?: 'PlayerTransactions';
  count: Scalars['Int'];
  playerTransactions?: Maybe<Array<Maybe<PlayerTransaction>>>;
};

export type Gifts = {
  __typename?: 'Gifts';
  count?: Maybe<Scalars['Int']>;
  gifts?: Maybe<Array<Gift>>;
};

export type ReceivedGiftsFilters = {
  gameId?: Maybe<Scalars['ID']>;
  giftId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
  status?: Maybe<ReceivedGiftStatus>;
};

export type ReceivedGifts = {
  __typename?: 'ReceivedGifts';
  count?: Maybe<Scalars['Int']>;
  receivedGifts?: Maybe<Array<ReceivedGift>>;
};

export type GiftFilters = {
  categoryId?: Maybe<Scalars['ID']>;
  supplierId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

export type Gift = {
  __typename?: 'Gift';
  id: Scalars['ID'];
  sku: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  inventoryNumber?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  categoryId: Scalars['ID'];
  supplierId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  supplier?: Maybe<Supplier>;
  creator?: Maybe<User>;
  activated: Scalars['Boolean'];
  createdBy: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type GiftInput = {
  name: Scalars['String'];
  sku: Scalars['String'];
  points?: Maybe<Scalars['Float']>;
  activated?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['ID'];
  supplierId: Scalars['ID'];
  inventoryNumber: Scalars['Int'];
  imageMediaId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type ReceiveGiftInput = {
  playingTransactionId?: Maybe<Scalars['ID']>;
  giftId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  address: Scalars['String'];
  peopleId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ReceivedGift = {
  __typename?: 'ReceivedGift';
  id: Scalars['ID'];
  playingTransactionId?: Maybe<Scalars['ID']>;
  playingTransaction?: Maybe<PlayerTransaction>;
  /** This is product id */
  giftId?: Maybe<Scalars['ID']>;
  /** This is product version when user take this gift */
  giftVersion: Scalars['Int'];
  gift?: Maybe<Product>;
  userId: Scalars['ID'];
  user?: Maybe<User>;
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  peopleId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  usedPoints?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  status: ReceivedGiftStatus;
  type: ReceivedGiftTypes;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export enum ReceivedGiftTypes {
  /** Nhận được quà từ chơi game */
  PlayGame = 'PLAY_GAME',
  /** Nhận được quà bằng cách đổi điểm */
  ByPoints = 'BY_POINTS',
}

export enum ReceivedGiftStatus {
  /** Người dùng chưa nhận và còn đang trong quà của tôi */
  InCart = 'IN_CART',
  /** Chờ admin xác thực thông tin trước khi chuyển quà */
  WaitingForVerify = 'WAITING_FOR_VERIFY',
  /** Quà đang vận chuyển đến người dùng */
  WaitingForDelivery = 'WAITING_FOR_DELIVERY',
  /** Người dùng đã nhận được quà */
  Delivered = 'DELIVERED',
  /** Hết hạn nhận quà do người dùng quên không nhận */
  Expired = 'EXPIRED',
}

export type Configurations = {
  __typename?: 'Configurations';
  defaultGameId?: Maybe<Scalars['ID']>;
  defaultGame?: Maybe<Game>;
};

export type ConfigurationsInput = {
  defaultGameId: Scalars['ID'];
};

export type CategoryFields = { __typename?: 'Category' } & Pick<
  Category,
  'id' | 'name' | 'description' | 'createdBy' | 'imageId' | 'createdAt' | 'updatedAt'
> & {
    creator?: Maybe<{ __typename?: 'User' } & UserBaseFields>;
    image?: Maybe<{ __typename?: 'Media' } & MediaFields>;
  };

export type GameFields = { __typename?: 'Game' } & Pick<
  Game,
  | 'id'
  | 'numberOfPlay'
  | 'type'
  | 'description'
  | 'activated'
  | 'imageId'
  | 'productId'
  | 'createdBy'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
> & {
    image?: Maybe<{ __typename?: 'Media' } & MediaFields>;
    product?: Maybe<{ __typename?: 'Product' } & ProductFields>;
    items?: Maybe<Array<{ __typename?: 'GameItem' } & GameItemFields>>;
    creator?: Maybe<{ __typename?: 'User' } & UserBaseFields>;
  };

export type GameItemFields = { __typename?: 'GameItem' } & Pick<
  GameItem,
  | 'id'
  | 'percent'
  | 'points'
  | 'type'
  | 'productId'
  | 'voucherId'
  | 'createdBy'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
> & {
    product?: Maybe<{ __typename?: 'Product' } & ProductFields>;
    voucher?: Maybe<{ __typename?: 'Voucher' } & VoucherFields>;
  };

export type ReceivedGiftFields = { __typename?: 'ReceivedGift' } & Pick<
  ReceivedGift,
  'id' | 'peopleId' | 'phoneNumber' | 'address' | 'createdAt' | 'updatedAt' | 'status' | 'type'
> & {
    user?: Maybe<{ __typename?: 'User' } & UserBaseFields>;
    gift?: Maybe<{ __typename?: 'Product' } & ProductFields>;
  };

export type MediaFields = { __typename?: 'Media' } & Pick<
  Media,
  'id' | 'uri' | 'size' | 'fileType' | 'fileName' | 'createdBy' | 'createdAt'
>;

export type JwtFields = { __typename?: 'JWT' } & Pick<
  Jwt,
  'token' | 'refreshToken' | 'uid' | 'expiresAt' | 'refreshTokenExpiresAt'
> & { payload?: Maybe<{ __typename?: 'User' } & AuthUserFields> };

export type ProductFields = { __typename?: 'Product' } & Pick<
  Product,
  | 'id'
  | 'name'
  | 'description'
  | 'sku'
  | 'inventoryNumber'
  | 'price'
  | 'activated'
  | 'createdAt'
  | 'updatedAt'
  | 'imageId'
  | 'createdBy'
  | 'categoryId'
  | 'supplierId'
> & {
    vouchers?: Maybe<Array<{ __typename?: 'Voucher' } & VoucherFields>>;
    image?: Maybe<{ __typename?: 'Media' } & MediaFields>;
    creator?: Maybe<{ __typename?: 'User' } & UserBaseFields>;
    category?: Maybe<{ __typename?: 'Category' } & Pick<Category, 'id' | 'name'>>;
    supplier?: Maybe<{ __typename?: 'Supplier' } & Pick<Supplier, 'id' | 'name'>>;
  };

export type SupplierFields = { __typename?: 'Supplier' } & Pick<
  Supplier,
  'id' | 'name' | 'address' | 'phone' | 'contactName' | 'createdBy' | 'createdAt' | 'updatedAt'
> & { creator: { __typename?: 'User' } & UserBaseFields };

export type AuthUserFields = { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'jobTitle'>;

export type UserBaseFields = { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'jobTitle'>;

export type UserFields = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'isEmailVerified'
  | 'password'
  | 'jobTitle'
  | 'phoneNumber'
  | 'playerFBIId'
  | 'energy'
  | 'points'
  | 'currentRemainingTurns'
  | 'currentGameId'
  | 'role'
  | 'createdAt'
  | 'updatedAt'
>;

export type VoucherFields = { __typename?: 'Voucher' } & Pick<
  Voucher,
  'id' | 'sku' | 'price' | 'percent' | 'unit' | 'quantity' | 'productId' | 'activated' | 'createdBy' | 'createdAt'
>;

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & { adminLogin: { __typename?: 'JWT' } & JwtFields };

export type MeVariables = Exact<{ [key: string]: never }>;

export type Me = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & AuthUserFields> };

export type CreateCategoryVariables = Exact<{
  data: CategoryInput;
}>;

export type CreateCategory = { __typename?: 'Mutation' } & {
  createCategory?: Maybe<{ __typename?: 'Category' } & CategoryFields>;
};

export type DeleteCategoryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteCategory = { __typename?: 'Mutation' } & {
  deleteCategory?: Maybe<{ __typename?: 'Category' } & CategoryFields>;
};

export type UpdateCategoryVariables = Exact<{
  id: Scalars['ID'];
  data: CategoryInput;
}>;

export type UpdateCategory = { __typename?: 'Mutation' } & {
  updateCategory?: Maybe<{ __typename?: 'Category' } & CategoryFields>;
};

export type ListCategoryVariables = Exact<{ [key: string]: never }>;

export type ListCategory = { __typename?: 'Query' } & {
  categories?: Maybe<Array<{ __typename?: 'Category' } & CategoryFields>>;
};

export type CreateGameVariables = Exact<{
  input: GameInput;
}>;

export type CreateGame = { __typename?: 'Mutation' } & { createGame?: Maybe<{ __typename?: 'Game' } & GameFields> };

export type DeleteGameVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteGame = { __typename?: 'Mutation' } & { deleteGame?: Maybe<{ __typename?: 'Game' } & GameFields> };

export type UpdateGameVariables = Exact<{
  id: Scalars['ID'];
  data: GameInput;
}>;

export type UpdateGame = { __typename?: 'Mutation' } & { updateGame?: Maybe<{ __typename?: 'Game' } & GameFields> };

export type GetGameVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetGame = { __typename?: 'Query' } & { game?: Maybe<{ __typename?: 'Game' } & GameFields> };

export type GetGamesVariables = Exact<{
  filters?: Maybe<GameFilters>;
  pagination: BasePaginationInput;
}>;

export type GetGames = { __typename?: 'Query' } & {
  games?: Maybe<
    { __typename?: 'Games' } & Pick<Games, 'count'> & { games?: Maybe<Array<{ __typename?: 'Game' } & GameFields>> }
  >;
};

export type ListGiftVariables = Exact<{
  pagination: BasePaginationInput;
  filters?: Maybe<ReceivedGiftsFilters>;
}>;

export type ListGift = { __typename?: 'Query' } & {
  receivedGifts?: Maybe<
    { __typename?: 'ReceivedGifts' } & Pick<ReceivedGifts, 'count'> & {
        receivedGifts?: Maybe<Array<{ __typename?: 'ReceivedGift' } & ReceivedGiftFields>>;
      }
  >;
};

export type SingleUploadVariables = Exact<{
  file: Scalars['Upload'];
}>;

export type SingleUpload = { __typename?: 'Mutation' } & {
  singleUpload?: Maybe<{ __typename?: 'Media' } & MediaFields>;
};

export type CreateProductVariables = Exact<{
  data: ProductInput;
}>;

export type CreateProduct = { __typename?: 'Mutation' } & {
  createProduct?: Maybe<{ __typename?: 'Product' } & ProductFields>;
};

export type CreateVoucherVariables = Exact<{
  input: VoucherInput;
}>;

export type CreateVoucher = { __typename?: 'Mutation' } & {
  createVoucher?: Maybe<{ __typename?: 'Voucher' } & VoucherFields>;
};

export type DeleteProductVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteProduct = { __typename?: 'Mutation' } & {
  deleteProduct?: Maybe<{ __typename?: 'Product' } & ProductFields>;
};

export type DeleteVoucherVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteVoucher = { __typename?: 'Mutation' } & {
  deleteVoucher?: Maybe<{ __typename?: 'Voucher' } & VoucherFields>;
};

export type UpdateProductVariables = Exact<{
  id: Scalars['ID'];
  data: ProductInput;
}>;

export type UpdateProduct = { __typename?: 'Mutation' } & {
  updateProduct?: Maybe<{ __typename?: 'Product' } & ProductFields>;
};

export type UpdateVoucherVariables = Exact<{
  id: Scalars['ID'];
  input: VoucherInput;
}>;

export type UpdateVoucher = { __typename?: 'Mutation' } & {
  updateVoucher?: Maybe<{ __typename?: 'Voucher' } & VoucherFields>;
};

export type GetProductVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetProduct = { __typename?: 'Query' } & { product?: Maybe<{ __typename?: 'Product' } & ProductFields> };

export type ListProductsVariables = Exact<{
  filter?: Maybe<ProductFilters>;
  pagination: BasePaginationInput;
}>;

export type ListProducts = { __typename?: 'Query' } & {
  products?: Maybe<
    { __typename?: 'Products' } & Pick<Products, 'count'> & {
        products?: Maybe<Array<{ __typename?: 'Product' } & ProductFields>>;
      }
  >;
};

export type ProductVouchersVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ProductVouchers = { __typename?: 'Query' } & {
  vouchers?: Maybe<
    { __typename?: 'Vouchers' } & Pick<Vouchers, 'count'> & {
        vouchers?: Maybe<Array<{ __typename?: 'Voucher' } & VoucherFields>>;
      }
  >;
};

export type CreateSupplierVariables = Exact<{
  input?: Maybe<CreateSupplierInput>;
}>;

export type CreateSupplier = { __typename?: 'Mutation' } & {
  createSupplier: { __typename?: 'Supplier' } & SupplierFields;
};

export type DeleteSupplierVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteSupplier = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteSupplier'>;

export type UpdateSupplierVariables = Exact<{
  input?: Maybe<UpdateSupplierInput>;
}>;

export type UpdateSupplier = { __typename?: 'Mutation' } & Pick<Mutation, 'updateSupplier'>;

export type GetAllSuppliersVariables = Exact<{ [key: string]: never }>;

export type GetAllSuppliers = { __typename?: 'Query' } & {
  getAllSuppliers: Array<{ __typename?: 'Supplier' } & SupplierFields>;
};

export type GetUserVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUser = { __typename?: 'Query' } & { user?: Maybe<{ __typename?: 'User' } & UserFields> };

export type ListUserVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  pagination: BasePaginationInput;
}>;

export type ListUser = { __typename?: 'Query' } & {
  users?: Maybe<
    { __typename?: 'Users' } & Pick<Users, 'count'> & { users?: Maybe<Array<{ __typename?: 'User' } & UserFields>> }
  >;
};

export const UserBaseFields = gql`
  fragment UserBaseFields on User {
    id
    firstName
    lastName
    jobTitle
  }
`;
export const MediaFields = gql`
  fragment MediaFields on Media {
    id
    uri
    size
    fileType
    fileName
    createdBy
    createdAt
  }
`;
export const CategoryFields = gql`
  fragment CategoryFields on Category {
    id
    name
    description
    createdBy
    creator {
      ...UserBaseFields
    }
    imageId
    image {
      ...MediaFields
    }
    createdAt
    updatedAt
  }
  ${UserBaseFields}
  ${MediaFields}
`;
export const VoucherFields = gql`
  fragment VoucherFields on Voucher {
    id
    sku
    price
    percent
    unit
    quantity
    productId
    activated
    createdBy
    createdAt
  }
`;
export const ProductFields = gql`
  fragment ProductFields on Product {
    id
    name
    description
    sku
    inventoryNumber
    price
    activated
    createdAt
    updatedAt
    vouchers {
      ...VoucherFields
    }
    imageId
    image {
      ...MediaFields
    }
    createdBy
    creator {
      ...UserBaseFields
    }
    categoryId
    category {
      id
      name
    }
    supplierId
    supplier {
      id
      name
    }
  }
  ${VoucherFields}
  ${MediaFields}
  ${UserBaseFields}
`;
export const GameItemFields = gql`
  fragment GameItemFields on GameItem {
    id
    percent
    points
    type
    productId
    product {
      ...ProductFields
    }
    voucherId
    voucher {
      ...VoucherFields
    }
    createdBy
    createdAt
    updatedAt
    deletedAt
  }
  ${ProductFields}
  ${VoucherFields}
`;
export const GameFields = gql`
  fragment GameFields on Game {
    id
    numberOfPlay
    type
    description
    activated
    imageId
    image {
      ...MediaFields
    }
    productId
    product {
      ...ProductFields
    }
    items {
      ...GameItemFields
    }
    createdBy
    creator {
      ...UserBaseFields
    }
    createdAt
    updatedAt
    deletedAt
  }
  ${MediaFields}
  ${ProductFields}
  ${GameItemFields}
  ${UserBaseFields}
`;
export const ReceivedGiftFields = gql`
  fragment ReceivedGiftFields on ReceivedGift {
    id
    peopleId
    phoneNumber
    address
    user {
      ...UserBaseFields
    }
    createdAt
    updatedAt
    status
    type
    gift {
      ...ProductFields
    }
  }
  ${UserBaseFields}
  ${ProductFields}
`;
export const AuthUserFields = gql`
  fragment AuthUserFields on User {
    id
    firstName
    lastName
    jobTitle
  }
`;
export const JwtFields = gql`
  fragment JWTFields on JWT {
    token
    refreshToken
    uid
    expiresAt
    refreshTokenExpiresAt
    payload {
      ...AuthUserFields
    }
  }
  ${AuthUserFields}
`;
export const SupplierFields = gql`
  fragment SupplierFields on Supplier {
    id
    name
    address
    phone
    contactName
    createdBy
    createdAt
    updatedAt
    creator {
      ...UserBaseFields
    }
  }
  ${UserBaseFields}
`;
export const UserFields = gql`
  fragment UserFields on User {
    id
    firstName
    lastName
    email
    isEmailVerified
    password
    jobTitle
    phoneNumber
    playerFBIId
    energy
    points
    currentRemainingTurns
    currentGameId
    role
    createdAt
    updatedAt
  }
`;
export const LoginMutationDocument = gql`
  mutation loginMutation($email: String!, $password: String!) {
    adminLogin(data: { email: $email, password: $password }) {
      ...JWTFields
    }
  }
  ${JwtFields}
`;
export const MeDocument = gql`
  query me {
    me {
      ...AuthUserFields
    }
  }
  ${AuthUserFields}
`;
export const CreateCategoryDocument = gql`
  mutation createCategory($data: CategoryInput!) {
    createCategory(data: $data) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
export const DeleteCategoryDocument = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
export const UpdateCategoryDocument = gql`
  mutation updateCategory($id: ID!, $data: CategoryInput!) {
    updateCategory(id: $id, data: $data) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
export const ListCategoryDocument = gql`
  query listCategory {
    categories {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
export const CreateGameDocument = gql`
  mutation createGame($input: GameInput!) {
    createGame(data: $input) {
      ...GameFields
    }
  }
  ${GameFields}
`;
export const DeleteGameDocument = gql`
  mutation deleteGame($id: ID!) {
    deleteGame(id: $id) {
      ...GameFields
    }
  }
  ${GameFields}
`;
export const UpdateGameDocument = gql`
  mutation updateGame($id: ID!, $data: GameInput!) {
    updateGame(id: $id, data: $data) {
      ...GameFields
    }
  }
  ${GameFields}
`;
export const GetGameDocument = gql`
  query getGame($id: ID!) {
    game(id: $id) {
      ...GameFields
    }
  }
  ${GameFields}
`;
export const GetGamesDocument = gql`
  query getGames($filters: GameFilters, $pagination: BasePaginationInput!) {
    games(filters: $filters, pagination: $pagination) {
      count
      games {
        ...GameFields
      }
    }
  }
  ${GameFields}
`;
export const ListGiftDocument = gql`
  query listGift($pagination: BasePaginationInput!, $filters: ReceivedGiftsFilters) {
    receivedGifts(pagination: $pagination, filters: $filters) {
      count
      receivedGifts {
        ...ReceivedGiftFields
      }
    }
  }
  ${ReceivedGiftFields}
`;
export const SingleUploadDocument = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      ...MediaFields
    }
  }
  ${MediaFields}
`;
export const CreateProductDocument = gql`
  mutation createProduct($data: ProductInput!) {
    createProduct(data: $data) {
      ...ProductFields
    }
  }
  ${ProductFields}
`;
export const CreateVoucherDocument = gql`
  mutation createVoucher($input: VoucherInput!) {
    createVoucher(data: $input) {
      ...VoucherFields
    }
  }
  ${VoucherFields}
`;
export const DeleteProductDocument = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      ...ProductFields
    }
  }
  ${ProductFields}
`;
export const DeleteVoucherDocument = gql`
  mutation deleteVoucher($id: ID!) {
    deleteVoucher(id: $id) {
      ...VoucherFields
    }
  }
  ${VoucherFields}
`;
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $data: ProductInput!) {
    updateProduct(id: $id, data: $data) {
      ...ProductFields
    }
  }
  ${ProductFields}
`;
export const UpdateVoucherDocument = gql`
  mutation updateVoucher($id: ID!, $input: VoucherInput!) {
    updateVoucher(id: $id, data: $input) {
      ...VoucherFields
    }
  }
  ${VoucherFields}
`;
export const GetProductDocument = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      ...ProductFields
    }
  }
  ${ProductFields}
`;
export const ListProductsDocument = gql`
  query listProducts($filter: ProductFilters, $pagination: BasePaginationInput!) {
    products(filters: $filter, pagination: $pagination) {
      products {
        ...ProductFields
      }
      count
    }
  }
  ${ProductFields}
`;
export const ProductVouchersDocument = gql`
  query productVouchers($id: ID!) {
    vouchers(pagination: { limit: 1000 }, filters: { productId: $id }) {
      count
      vouchers {
        ...VoucherFields
      }
    }
  }
  ${VoucherFields}
`;
export const CreateSupplierDocument = gql`
  mutation createSupplier($input: CreateSupplierInput) {
    createSupplier(input: $input) {
      ...SupplierFields
    }
  }
  ${SupplierFields}
`;
export const DeleteSupplierDocument = gql`
  mutation deleteSupplier($id: ID!) {
    deleteSupplier(id: $id)
  }
`;
export const UpdateSupplierDocument = gql`
  mutation updateSupplier($input: UpdateSupplierInput) {
    updateSupplier(input: $input)
  }
`;
export const GetAllSuppliersDocument = gql`
  query getAllSuppliers {
    getAllSuppliers {
      ...SupplierFields
    }
  }
  ${SupplierFields}
`;
export const GetUserDocument = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      ...UserFields
    }
  }
  ${UserFields}
`;
export const ListUserDocument = gql`
  query listUser($query: String, $pagination: BasePaginationInput!) {
    users(filters: { query: $query, role: [USER] }, pagination: $pagination) {
      count
      users {
        ...UserFields
      }
    }
  }
  ${UserFields}
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    loginMutation(variables: LoginMutationVariables): Promise<LoginMutation> {
      return withWrapper(() => client.request<LoginMutation>(print(LoginMutationDocument), variables));
    },
    me(variables?: MeVariables): Promise<Me> {
      return withWrapper(() => client.request<Me>(print(MeDocument), variables));
    },
    createCategory(variables: CreateCategoryVariables): Promise<CreateCategory> {
      return withWrapper(() => client.request<CreateCategory>(print(CreateCategoryDocument), variables));
    },
    deleteCategory(variables: DeleteCategoryVariables): Promise<DeleteCategory> {
      return withWrapper(() => client.request<DeleteCategory>(print(DeleteCategoryDocument), variables));
    },
    updateCategory(variables: UpdateCategoryVariables): Promise<UpdateCategory> {
      return withWrapper(() => client.request<UpdateCategory>(print(UpdateCategoryDocument), variables));
    },
    listCategory(variables?: ListCategoryVariables): Promise<ListCategory> {
      return withWrapper(() => client.request<ListCategory>(print(ListCategoryDocument), variables));
    },
    createGame(variables: CreateGameVariables): Promise<CreateGame> {
      return withWrapper(() => client.request<CreateGame>(print(CreateGameDocument), variables));
    },
    deleteGame(variables: DeleteGameVariables): Promise<DeleteGame> {
      return withWrapper(() => client.request<DeleteGame>(print(DeleteGameDocument), variables));
    },
    updateGame(variables: UpdateGameVariables): Promise<UpdateGame> {
      return withWrapper(() => client.request<UpdateGame>(print(UpdateGameDocument), variables));
    },
    getGame(variables: GetGameVariables): Promise<GetGame> {
      return withWrapper(() => client.request<GetGame>(print(GetGameDocument), variables));
    },
    getGames(variables: GetGamesVariables): Promise<GetGames> {
      return withWrapper(() => client.request<GetGames>(print(GetGamesDocument), variables));
    },
    listGift(variables: ListGiftVariables): Promise<ListGift> {
      return withWrapper(() => client.request<ListGift>(print(ListGiftDocument), variables));
    },
    singleUpload(variables: SingleUploadVariables): Promise<SingleUpload> {
      return withWrapper(() => client.request<SingleUpload>(print(SingleUploadDocument), variables));
    },
    createProduct(variables: CreateProductVariables): Promise<CreateProduct> {
      return withWrapper(() => client.request<CreateProduct>(print(CreateProductDocument), variables));
    },
    createVoucher(variables: CreateVoucherVariables): Promise<CreateVoucher> {
      return withWrapper(() => client.request<CreateVoucher>(print(CreateVoucherDocument), variables));
    },
    deleteProduct(variables: DeleteProductVariables): Promise<DeleteProduct> {
      return withWrapper(() => client.request<DeleteProduct>(print(DeleteProductDocument), variables));
    },
    deleteVoucher(variables: DeleteVoucherVariables): Promise<DeleteVoucher> {
      return withWrapper(() => client.request<DeleteVoucher>(print(DeleteVoucherDocument), variables));
    },
    updateProduct(variables: UpdateProductVariables): Promise<UpdateProduct> {
      return withWrapper(() => client.request<UpdateProduct>(print(UpdateProductDocument), variables));
    },
    updateVoucher(variables: UpdateVoucherVariables): Promise<UpdateVoucher> {
      return withWrapper(() => client.request<UpdateVoucher>(print(UpdateVoucherDocument), variables));
    },
    getProduct(variables: GetProductVariables): Promise<GetProduct> {
      return withWrapper(() => client.request<GetProduct>(print(GetProductDocument), variables));
    },
    listProducts(variables: ListProductsVariables): Promise<ListProducts> {
      return withWrapper(() => client.request<ListProducts>(print(ListProductsDocument), variables));
    },
    productVouchers(variables: ProductVouchersVariables): Promise<ProductVouchers> {
      return withWrapper(() => client.request<ProductVouchers>(print(ProductVouchersDocument), variables));
    },
    createSupplier(variables?: CreateSupplierVariables): Promise<CreateSupplier> {
      return withWrapper(() => client.request<CreateSupplier>(print(CreateSupplierDocument), variables));
    },
    deleteSupplier(variables: DeleteSupplierVariables): Promise<DeleteSupplier> {
      return withWrapper(() => client.request<DeleteSupplier>(print(DeleteSupplierDocument), variables));
    },
    updateSupplier(variables?: UpdateSupplierVariables): Promise<UpdateSupplier> {
      return withWrapper(() => client.request<UpdateSupplier>(print(UpdateSupplierDocument), variables));
    },
    getAllSuppliers(variables?: GetAllSuppliersVariables): Promise<GetAllSuppliers> {
      return withWrapper(() => client.request<GetAllSuppliers>(print(GetAllSuppliersDocument), variables));
    },
    getUser(variables: GetUserVariables): Promise<GetUser> {
      return withWrapper(() => client.request<GetUser>(print(GetUserDocument), variables));
    },
    listUser(variables: ListUserVariables): Promise<ListUser> {
      return withWrapper(() => client.request<ListUser>(print(ListUserDocument), variables));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
