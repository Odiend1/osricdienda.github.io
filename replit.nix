{ pkgs }: {
  deps = [
    pkgs.unzip
    pkgs.openssh_with_kerberos
  ];
}