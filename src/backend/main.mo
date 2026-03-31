actor {
  type ProjectData = {
    name : Text;
    contractAddress : Text;
  };

  let projectData : ProjectData = {
    name = "Dojicoin";
    contractAddress = "0x6312f5c83d117a579ee1bbb4f9ba89113ffe7f82";
  };

  public query ({ caller }) func getProjectData() : async ProjectData {
    projectData;
  };
};
