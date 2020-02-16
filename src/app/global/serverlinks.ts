export class Global{
    public static BASE_HOST_ENDPOINT ='https://192.168.100.60:8000';
    public static TOKEN_ISVALID = Global.BASE_HOST_ENDPOINT+"/Home/Test";
    public static LOGIN=Global.BASE_HOST_ENDPOINT+"/useraccount/login";
    public static REGISTER_USER=Global.BASE_HOST_ENDPOINT+"/useraccount/signup";
    public static GET_ALL_ROLES=Global.BASE_HOST_ENDPOINT+"/";
    public static CREATE_ROLE=Global.BASE_HOST_ENDPOINT+"/home/createrole";
    public static EDIT_ROLE=Global.BASE_HOST_ENDPOINT+"/home/editrole";
    public static DELETE_ROLE=Global.BASE_HOST_ENDPOINT+"/home/deleterole";
    public static ADD_MEMBERS_TO_ROLE=Global.BASE_HOST_ENDPOINT+"/home/addmembertorole";



}